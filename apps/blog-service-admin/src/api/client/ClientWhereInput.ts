import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type ClientWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  contract?: ContractWhereUniqueInput;
};
