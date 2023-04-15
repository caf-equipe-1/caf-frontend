import { EmailLoginDto } from "../../../../../domain/dtos/login/emailLogin-dto";
import { LoggedUserDto } from "../../../../../domain/dtos/login/loggedUser-dto";
import { HttpResponse } from "../../../../../domain/types/http/httpResponse-dto";

export interface EmailLoginRouterInterface {
  login(loginInfo: EmailLoginDto): Promise<HttpResponse<LoggedUserDto>>;
}
