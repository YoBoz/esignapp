import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type SignatureWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  signatureCoordinates?: JsonFilter;
  signedOn?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  document?: DocumentWhereUniqueInput;
};
