import { InputJsonValue } from "../../types";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type SignatureCreateInput = {
  email?: string | null;
  signatureCoordinates?: InputJsonValue;
  signedOn?: Date | null;
  name?: string | null;
  document?: DocumentWhereUniqueInput | null;
};