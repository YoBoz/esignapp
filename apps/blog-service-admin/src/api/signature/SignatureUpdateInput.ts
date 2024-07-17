import { InputJsonValue } from "../../types";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type SignatureUpdateInput = {
  signerEmail?: string | null;
  signedAt?: Date | null;
  signatureImage?: InputJsonValue;
  contract?: ContractWhereUniqueInput | null;
};
