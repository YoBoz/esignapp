export type EmailNotification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sentAt: Date | null;
  recipientEmail: string | null;
  subject: string | null;
  message: string | null;
  contract: string | null;
};
