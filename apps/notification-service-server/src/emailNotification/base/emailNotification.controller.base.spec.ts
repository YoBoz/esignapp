import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { EmailNotificationController } from "../emailNotification.controller";
import { EmailNotificationService } from "../emailNotification.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  sentAt: new Date(),
  recipientEmail: "exampleRecipientEmail",
  subject: "exampleSubject",
  message: "exampleMessage",
  contract: "exampleContract",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  sentAt: new Date(),
  recipientEmail: "exampleRecipientEmail",
  subject: "exampleSubject",
  message: "exampleMessage",
  contract: "exampleContract",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    sentAt: new Date(),
    recipientEmail: "exampleRecipientEmail",
    subject: "exampleSubject",
    message: "exampleMessage",
    contract: "exampleContract",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  sentAt: new Date(),
  recipientEmail: "exampleRecipientEmail",
  subject: "exampleSubject",
  message: "exampleMessage",
  contract: "exampleContract",
};

const service = {
  createEmailNotification() {
    return CREATE_RESULT;
  },
  emailNotifications: () => FIND_MANY_RESULT,
  emailNotification: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("EmailNotification", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmailNotificationService,
          useValue: service,
        },
      ],
      controllers: [EmailNotificationController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /emailNotifications", async () => {
    await request(app.getHttpServer())
      .post("/emailNotifications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        sentAt: CREATE_RESULT.sentAt.toISOString(),
      });
  });

  test("GET /emailNotifications", async () => {
    await request(app.getHttpServer())
      .get("/emailNotifications")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          sentAt: FIND_MANY_RESULT[0].sentAt.toISOString(),
        },
      ]);
  });

  test("GET /emailNotifications/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/emailNotifications"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /emailNotifications/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/emailNotifications"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        sentAt: FIND_ONE_RESULT.sentAt.toISOString(),
      });
  });

  test("POST /emailNotifications existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/emailNotifications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        sentAt: CREATE_RESULT.sentAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/emailNotifications")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
