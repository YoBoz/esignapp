import { Signature as TSignature } from "../api/signature/Signature";

export const SIGNATURE_TITLE_FIELD = "name";

export const SignatureTitle = (record: TSignature): string => {
  return record.name?.toString() || String(record.id);
};
