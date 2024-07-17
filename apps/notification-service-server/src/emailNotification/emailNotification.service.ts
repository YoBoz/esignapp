import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailNotificationServiceBase } from "./base/emailNotification.service.base";

@Injectable()
export class EmailNotificationService extends EmailNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
