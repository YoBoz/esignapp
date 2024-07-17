import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type ClientUpdateInput = {
  name?: string | null;
  email?: string | null;
  contract?: ContractWhereUniqueInput | null;
};
