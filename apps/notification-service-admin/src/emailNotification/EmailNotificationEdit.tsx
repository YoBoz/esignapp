import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EmailNotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
