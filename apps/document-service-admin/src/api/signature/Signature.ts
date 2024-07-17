import { JsonValue } from "type-fest";
import { Document } from "../document/Document";

export type Signature = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  signatureCoordinates: JsonValue;
  signedOn: Date | null;
  name: string | null;
  document?: Document | null;
};
