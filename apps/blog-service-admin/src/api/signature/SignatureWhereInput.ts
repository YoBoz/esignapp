import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type SignatureWhereInput = {
  id?: StringFilter;
  signerEmail?: StringNullableFilter;
  signedAt?: DateTimeNullableFilter;
  signatureImage?: JsonFilter;
  contract?: ContractWhereUniqueInput;
};
