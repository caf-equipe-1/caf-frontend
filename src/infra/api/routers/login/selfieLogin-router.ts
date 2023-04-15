import { LoggedUserDto } from "../../../../domain/dtos/login/loggedUser-dto";
import { SelfieLoginDto } from "../../../../domain/dtos/login/selfieLogin-dto";
import { ApiConnectionInterface } from "../../../abstract/api/connection/apiConnection-interface";
import { SelfieLoginRouterInterface } from "../../../abstract/api/routers/login/selfieLogin-router-interface";
import { HttpRequestAdapterInterface } from "../../../abstract/helpers/adapters/httpRequest-adapter-interface";

export class SelfieLoginRouter implements SelfieLoginRouterInterface {
  private readonly httpRequest: HttpRequestAdapterInterface;
  private readonly apiConnection: ApiConnectionInterface;
  private readonly route: string;

  public constructor(
    httpRequest: HttpRequestAdapterInterface,
    apiConnection: ApiConnectionInterface
  ) {
    this.httpRequest = httpRequest;
    this.apiConnection = apiConnection;
    this.route = "login/selfie";
  }

  public async login(loginInfo: SelfieLoginDto): Promise<LoggedUserDto> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}`;

    return await this.httpRequest.post(apiLink, loginInfo);
  }
}
