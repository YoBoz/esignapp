import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ContractTitle } from "../contract/ContractTitle";

export const SignatureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="signerEmail" source="signerEmail" type="email" />
        <DateTimeInput label="signedAt" source="signedAt" />
        <div />
        <ReferenceInput
          source="contract.id"
          reference="Contract"
          label="Contract"
        >
          <SelectInput optionText={ContractTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
