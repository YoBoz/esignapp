import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EmailNotificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="sentAt" source="sentAt" />
        <TextInput
          label="recipientEmail"
          source="recipientEmail"
          type="email"
        />
        <TextInput label="subject" source="subject" />
        <TextInput label="message" multiline source="message" />
        <TextInput label="Contract" source="contract" />
      </SimpleForm>
    </Create>
  );
};
