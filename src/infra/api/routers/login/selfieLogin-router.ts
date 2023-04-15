import { LoggedUserDto } from "../../../../domain/dtos/login/loggedUser-dto";
import { SelfieLoginDto } from "../../../../domain/dtos/login/selfieLogin-dto";
import { HttpResponse } from "../../../../domain/types/http/httpResponse-dto";
import { Message } from "../../../../domain/types/message/message.type";
import { ApiConnectionInterface } from "../../../abstract/api/connection/apiConnection-interface";
import { SelfieLoginRouterInterface } from "../../../abstract/api/routers/login/selfieLogin-router-interface";
import { HttpRequestAdapterInterface } from "../../../abstract/helpers/adapters/httpRequest-adapter-interface";
import { TokenStorageInterface } from "../../../abstract/storages/token-storage-interface";

export class SelfieLoginRouter implements SelfieLoginRouterInterface {
  private readonly httpRequest: HttpRequestAdapterInterface;
  private readonly apiConnection: ApiConnectionInterface;
  private readonly tokenStorage: TokenStorageInterface;
  private readonly route: string;

  public constructor(
    httpRequest: HttpRequestAdapterInterface,
    apiConnection: ApiConnectionInterface,
    tokenStorage: TokenStorageInterface
  ) {
    this.httpRequest = httpRequest;
    this.apiConnection = apiConnection;
    this.tokenStorage = tokenStorage;
    this.route = "login/email";
  }

  public async login(
    loginInfo: SelfieLoginDto
  ): Promise<HttpResponse<LoggedUserDto> | Message> {
    try {
      const apiLink = `${this.apiConnection.getLink()}/${this.route}`;
      const response = await this.httpRequest.post(apiLink, loginInfo);
      const token = response.body.token;

      this.tokenStorage.store(token);

      return response;
    } catch (error: any) {
      return { error: true, message: error.message };
    }
  }
}
