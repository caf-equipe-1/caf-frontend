import { EmailLoginDto } from "../../../../domain/dtos/login/emailLogin-dto";
import { LoggedUserDto } from "../../../../domain/dtos/login/loggedUser-dto";
import { ApiConnectionInterface } from "../../../abstract/api/connection/apiConnection-interface";
import { EmailLoginRouterInterface } from "../../../abstract/api/routers/login/emailLogin-router-interface";
import { HttpRequestAdapterInterface } from "../../../abstract/helpers/adapters/httpRequest-adapter-interface";

export class EmailLoginRouter implements EmailLoginRouterInterface {
  private readonly httpRequest: HttpRequestAdapterInterface;
  private readonly apiConnection: ApiConnectionInterface;
  private readonly route: string;

  public constructor(
    httpRequest: HttpRequestAdapterInterface,
    apiConnection: ApiConnectionInterface
  ) {
    this.httpRequest = httpRequest;
    this.apiConnection = apiConnection;
    this.route = "login/email";
  }

  public async login(loginInfo: EmailLoginDto): Promise<LoggedUserDto> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}`;

    return await this.httpRequest.post(apiLink, loginInfo);
  }
}
