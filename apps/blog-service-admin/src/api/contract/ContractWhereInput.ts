import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SignatureListRelationFilter } from "../signature/SignatureListRelationFilter";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";

export type ContractWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  status?: "Option1";
  signatures?: SignatureListRelationFilter;
  clients?: ClientListRelationFilter;
};
