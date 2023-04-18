import { EmailLoginDto } from "../../../../../domain/dtos/login/emailLogin-dto";
import { LoggedUserDto } from "../../../../../domain/dtos/login/loggedUser-dto";
import { HttpResponse } from "../../../../../domain/types/http/httpResponse-dto";
import { Message } from "../../../../../domain/types/message/message.type";

export interface EmailLoginRouterInterface {
  login(
    loginInfo: EmailLoginDto
  ): Promise<HttpResponse<LoggedUserDto> | Message>;
}
