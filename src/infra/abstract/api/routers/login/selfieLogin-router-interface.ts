import { LoggedUserDto } from "../../../../../domain/dtos/login/loggedUser-dto";
import { SelfieLoginDto } from "../../../../../domain/dtos/login/selfieLogin-dto";

export interface SelfieLoginRouterInterface {
  login(loginInfo: SelfieLoginDto): Promise<LoggedUserDto>;
}
