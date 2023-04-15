import { EmailLoginDto } from "../../../../domain/dtos/login/emailLogin-dto";
import { LoggedUserDto } from "../../../../domain/dtos/login/loggedUser-dto";
import { EmailLoginRouterInterface } from "../../../abstract/api/routers/login/emailLogin-router-interface";

export class EmailLoginRouter implements EmailLoginRouterInterface {
  public login(loginInfo: EmailLoginDto): Promise<LoggedUserDto> {
    throw new Error("Not implemented");
  }
}
