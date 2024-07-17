import { EmailNotificationWhereInput } from "./EmailNotificationWhereInput";
import { EmailNotificationOrderByInput } from "./EmailNotificationOrderByInput";

export type EmailNotificationFindManyArgs = {
  where?: EmailNotificationWhereInput;
  orderBy?: Array<EmailNotificationOrderByInput>;
  skip?: number;
  take?: number;
};
