import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ContractTitle } from "../contract/ContractTitle";

export const SignatureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
