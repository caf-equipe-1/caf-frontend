import { User } from "../../entities/user/user-entity";

export type LoggedUserDto = {
  token: string;
  user: User;
};
