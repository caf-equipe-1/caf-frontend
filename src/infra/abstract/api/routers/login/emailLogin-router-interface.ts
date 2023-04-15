import { EmailLoginDto } from "../../../../../domain/dtos/login/emailLogin-dto";
import { LoggedUserDto } from "../../../../../domain/dtos/login/loggedUser-dto";

export interface EmailLoginRouterInterface {
  login(loginInfo: EmailLoginDto): Promise<LoggedUserDto>;
}
