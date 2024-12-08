import { Signature } from "../signature/Signature";
import { Client } from "../client/Client";

export type Contract = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  status?: "Option1" | null;
  signatures?: Array<Signature>;
  clients?: Array<Client>;
};
