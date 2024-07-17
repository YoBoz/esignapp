export type EmailNotificationCreateInput = {
  sentAt?: Date | null;
  recipientEmail?: string | null;
  subject?: string | null;
  message?: string | null;
  contract?: string | null;
};
