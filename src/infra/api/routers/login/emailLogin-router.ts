import { EmailLoginDto } from "../../../../domain/dtos/login/emailLogin-dto";
import { LoggedUserDto } from "../../../../domain/dtos/login/loggedUser-dto";
import { HttpResponse } from "../../../../domain/types/http/httpResponse-dto";
import { Message } from "../../../../domain/types/message/message.type";
import { ApiConnectionInterface } from "../../../abstract/api/connection/apiConnection-interface";
import { EmailLoginRouterInterface } from "../../../abstract/api/routers/login/emailLogin-router-interface";
import { HttpRequestAdapterInterface } from "../../../abstract/helpers/adapters/httpRequest-adapter-interface";
import { TokenStorageInterface } from "../../../abstract/storages/token-storage-interface";

export class EmailLoginRouter implements EmailLoginRouterInterface {
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
    loginInfo: EmailLoginDto
  ): Promise<HttpResponse<LoggedUserDto> | any> {
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
