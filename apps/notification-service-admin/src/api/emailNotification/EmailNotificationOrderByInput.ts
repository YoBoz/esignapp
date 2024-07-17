import { SortOrder } from "../../util/SortOrder";

export type EmailNotificationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sentAt?: SortOrder;
  recipientEmail?: SortOrder;
  subject?: SortOrder;
  message?: SortOrder;
  contract?: SortOrder;
};
