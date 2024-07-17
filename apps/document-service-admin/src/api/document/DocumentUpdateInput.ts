import { SignatureUpdateManyWithoutDocumentsInput } from "./SignatureUpdateManyWithoutDocumentsInput";
import { InputJsonValue } from "../../types";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DocumentUpdateInput = {
  signatures?: SignatureUpdateManyWithoutDocumentsInput;
  file?: InputJsonValue;
  employee?: EmployeeWhereUniqueInput | null;
};
