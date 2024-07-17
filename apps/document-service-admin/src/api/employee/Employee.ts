import { Document } from "../document/Document";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  name: string | null;
  documents?: Array<Document>;
};
