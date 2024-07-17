import { StringFilter } from "../../util/StringFilter";
import { SignatureListRelationFilter } from "../signature/SignatureListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DocumentWhereInput = {
  id?: StringFilter;
  signatures?: SignatureListRelationFilter;
  file?: JsonFilter;
  employee?: EmployeeWhereUniqueInput;
};
