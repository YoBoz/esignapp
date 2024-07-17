import { Signature } from "../signature/Signature";
import { JsonValue } from "type-fest";
import { Employee } from "../employee/Employee";

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  signatures?: Array<Signature>;
  file: JsonValue;
  employee?: Employee | null;
};
