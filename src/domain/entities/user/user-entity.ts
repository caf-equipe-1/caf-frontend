import { Card } from "../card/card-entity";
import { Document } from "../document/document-entity";
import { Password } from "../password/password-entity";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  photo: string;
  cpf: string;
  passwords: Password[];
  documents: Document[];
  cards: Card[];
  createdAt: string;
  updatedAt: string;
};
