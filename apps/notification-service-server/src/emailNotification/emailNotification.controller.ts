import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailNotificationService } from "./emailNotification.service";
import { EmailNotificationControllerBase } from "./base/emailNotification.controller.base";

@swagger.ApiTags("emailNotifications")
@common.Controller("emailNotifications")
export class EmailNotificationController extends EmailNotificationControllerBase {
  constructor(protected readonly service: EmailNotificationService) {
    super(service);
  }
}
