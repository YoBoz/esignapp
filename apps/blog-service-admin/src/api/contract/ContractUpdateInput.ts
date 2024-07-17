import { SignatureUpdateManyWithoutContractsInput } from "./SignatureUpdateManyWithoutContractsInput";
import { ClientUpdateManyWithoutContractsInput } from "./ClientUpdateManyWithoutContractsInput";

export type ContractUpdateInput = {
  title?: string | null;
  content?: string | null;
  status?: "Option1" | null;
  signatures?: SignatureUpdateManyWithoutContractsInput;
  clients?: ClientUpdateManyWithoutContractsInput;
};
