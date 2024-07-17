import { DocumentCreateNestedManyWithoutEmployeesInput } from "./DocumentCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  email?: string | null;
  name?: string | null;
  documents?: DocumentCreateNestedManyWithoutEmployeesInput;
};
