import { Module } from "@nestjs/common";
import { EmailNotificationModuleBase } from "./base/emailNotification.module.base";
import { EmailNotificationService } from "./emailNotification.service";
import { EmailNotificationController } from "./emailNotification.controller";
import { EmailNotificationResolver } from "./emailNotification.resolver";

@Module({
  imports: [EmailNotificationModuleBase],
  controllers: [EmailNotificationController],
  providers: [EmailNotificationService, EmailNotificationResolver],
  exports: [EmailNotificationService],
})
export class EmailNotificationModule {}
