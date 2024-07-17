import { SignatureCreateNestedManyWithoutDocumentsInput } from "./SignatureCreateNestedManyWithoutDocumentsInput";
import { InputJsonValue } from "../../types";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DocumentCreateInput = {
  signatures?: SignatureCreateNestedManyWithoutDocumentsInput;
  file?: InputJsonValue;
  employee?: EmployeeWhereUniqueInput | null;
};
