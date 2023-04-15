import { CreateUserDto } from "../../../../domain/dtos/user/createUser-dto";
import { UpdateUserDto } from "../../../../domain/dtos/user/updateUser-dto";
import { User } from "../../../../domain/entities/user/user-entity";
import { HttpResponse } from "../../../../domain/types/http/httpResponse-dto";
import { ApiConnectionInterface } from "../../../abstract/api/connection/apiConnection-interface";
import { UserRouterInterface } from "../../../abstract/api/routers/user/user-router-interface";
import { HttpRequestAdapterInterface } from "../../../abstract/helpers/adapters/httpRequest-adapter-interface";
import { TokenStorageInterface } from "../../../abstract/storages/token-storage-interface";

export class UserRouter implements UserRouterInterface {
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
    this.route = "users";
  }

  public async create(userInfo: CreateUserDto): Promise<HttpResponse<User>> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}`;

    return await this.httpRequest.post(apiLink, userInfo);
  }

  public async update(
    userId: string,
    userInfo: UpdateUserDto
  ): Promise<HttpResponse<User>> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}/${userId}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.patch(apiLink, userInfo, authorization);
  }

  public async delete(userId: string): Promise<HttpResponse<User>> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}/${userId}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.delete(apiLink, authorization);
  }

  public async getOne(userId: string): Promise<HttpResponse<User>> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}/${userId}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.get(apiLink, authorization);
  }
}
