import { Contract } from "../contract/Contract";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  contract?: Contract | null;
};
