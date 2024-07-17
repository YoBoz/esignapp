import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EmailNotificationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="sentAt" source="sentAt" />
        <TextField label="recipientEmail" source="recipientEmail" />
        <TextField label="subject" source="subject" />
        <TextField label="message" source="message" />
        <TextField label="Contract" source="contract" />
      </SimpleShowLayout>
    </Show>
  );
};
