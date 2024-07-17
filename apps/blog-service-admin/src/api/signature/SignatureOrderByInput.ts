import { SortOrder } from "../../util/SortOrder";

export type SignatureOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  signerEmail?: SortOrder;
  signedAt?: SortOrder;
  signatureImage?: SortOrder;
  contractId?: SortOrder;
};
