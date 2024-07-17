import { SortOrder } from "../../util/SortOrder";

export type SignatureOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  signatureCoordinates?: SortOrder;
  signedOn?: SortOrder;
  name?: SortOrder;
  documentId?: SortOrder;
};
