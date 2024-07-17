import { DocumentUpdateManyWithoutEmployeesInput } from "./DocumentUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  email?: string | null;
  name?: string | null;
  documents?: DocumentUpdateManyWithoutEmployeesInput;
};
