import { LoggedUserDto } from "../../../../../domain/dtos/login/loggedUser-dto";
import { SelfieLoginDto } from "../../../../../domain/dtos/login/selfieLogin-dto";
import { HttpResponse } from "../../../../../domain/types/http/httpResponse-dto";
import { Message } from "../../../../../domain/types/message/message.type";

export interface SelfieLoginRouterInterface {
  login(loginInfo: SelfieLoginDto): Promise<HttpResponse<LoggedUserDto>>;
}
