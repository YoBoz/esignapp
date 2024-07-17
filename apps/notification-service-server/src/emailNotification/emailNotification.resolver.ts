import * as graphql from "@nestjs/graphql";
import { EmailNotificationResolverBase } from "./base/emailNotification.resolver.base";
import { EmailNotification } from "./base/EmailNotification";
import { EmailNotificationService } from "./emailNotification.service";

@graphql.Resolver(() => EmailNotification)
export class EmailNotificationResolver extends EmailNotificationResolverBase {
  constructor(protected readonly service: EmailNotificationService) {
    super(service);
  }
}
