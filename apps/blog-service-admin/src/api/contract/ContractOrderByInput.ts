import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  status?: SortOrder;
};
