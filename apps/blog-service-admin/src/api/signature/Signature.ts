import { JsonValue } from "type-fest";
import { Contract } from "../contract/Contract";

export type Signature = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  signerEmail: string | null;
  signedAt: Date | null;
  signatureImage: JsonValue;
  contract?: Contract | null;
};
