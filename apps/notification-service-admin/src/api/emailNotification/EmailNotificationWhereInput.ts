import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmailNotificationWhereInput = {
  id?: StringFilter;
  sentAt?: DateTimeNullableFilter;
  recipientEmail?: StringNullableFilter;
  subject?: StringNullableFilter;
  message?: StringNullableFilter;
  contract?: StringNullableFilter;
};
