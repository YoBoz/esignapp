import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmailNotificationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmailNotifications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="sentAt" source="sentAt" />
        <TextField label="recipientEmail" source="recipientEmail" />
        <TextField label="subject" source="subject" />
        <TextField label="message" source="message" />
        <TextField label="Contract" source="contract" />
      </Datagrid>
    </List>
  );
};
