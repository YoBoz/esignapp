import { SignatureWhereInput } from "./SignatureWhereInput";
import { SignatureOrderByInput } from "./SignatureOrderByInput";

export type SignatureFindManyArgs = {
  where?: SignatureWhereInput;
  orderBy?: Array<SignatureOrderByInput>;
  skip?: number;
  take?: number;
};
