import { SignatureCreateNestedManyWithoutContractsInput } from "./SignatureCreateNestedManyWithoutContractsInput";
import { ClientCreateNestedManyWithoutContractsInput } from "./ClientCreateNestedManyWithoutContractsInput";

export type ContractCreateInput = {
  title?: string | null;
  content?: string | null;
  status?: "Option1" | null;
  signatures?: SignatureCreateNestedManyWithoutContractsInput;
  clients?: ClientCreateNestedManyWithoutContractsInput;
};
