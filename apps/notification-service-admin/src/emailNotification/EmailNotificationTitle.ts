import { EmailNotification as TEmailNotification } from "../api/emailNotification/EmailNotification";

export const EMAILNOTIFICATION_TITLE_FIELD = "subject";

export const EmailNotificationTitle = (record: TEmailNotification): string => {
  return record.subject?.toString() || String(record.id);
};
