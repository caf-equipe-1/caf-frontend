import { LoggedUserDto } from "../../../domain/dtos/login/loggedUser-dto";
import { SelfieLoginDto } from "../../../domain/dtos/login/selfieLogin-dto";
import { SelfieLoginRouterInterface } from "../../abstract/routers/login/selfieLogin-router-interface";

export class SelfieLoginRouter implements SelfieLoginRouterInterface {
  public login(loginInfo: SelfieLoginDto): Promise<LoggedUserDto> {
    throw new Error("Not implemented");
  }
}
