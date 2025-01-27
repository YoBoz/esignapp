import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  file?: SortOrder;
  employeeId?: SortOrder;
};
