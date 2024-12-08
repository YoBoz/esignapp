import { Signature as TSignature } from "../api/signature/Signature";

export const SIGNATURE_TITLE_FIELD = "id";

export const SignatureTitle = (record: TSignature): string => {
  return record.id?.toString() || String(record.id);
};
