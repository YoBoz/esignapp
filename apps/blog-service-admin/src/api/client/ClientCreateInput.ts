import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type ClientCreateInput = {
  name?: string | null;
  email?: string | null;
  contract?: ContractWhereUniqueInput | null;
};
