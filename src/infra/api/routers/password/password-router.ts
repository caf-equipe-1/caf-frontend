import { CreatePasswordDto } from "../../../../domain/dtos/password/createPassword-dto";
import { UpdatePasswordDto } from "../../../../domain/dtos/password/updatePassword-dto";
import { Password } from "../../../../domain/entities/password/password-entity";
import { HttpResponse } from "../../../../domain/types/http/httpResponse-dto";
import { Message } from "../../../../domain/types/message/message.type";
import { ApiConnectionInterface } from "../../../abstract/api/connection/apiConnection-interface";
import { PasswordRouterInterface } from "../../../abstract/api/routers/password/password-router-interface";
import { HttpRequestAdapterInterface } from "../../../abstract/helpers/adapters/httpRequest-adapter-interface";
import { TokenStorageInterface } from "../../../abstract/storages/token-storage-interface";

export class PasswordRouter implements PasswordRouterInterface {
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
    this.route = "passwords";
  }

  public async create(
    passwordInfo: CreatePasswordDto
  ): Promise<HttpResponse<Password> | any> {
    try {
      const apiLink = `${this.apiConnection.getLink()}/${this.route}`;
      const authorization = this.tokenStorage.getAuthorization();

      return await this.httpRequest.post(apiLink, passwordInfo, authorization);
    } catch (error: any) {
      return { error: true, message: error.message };
    }
  }

  public async update(
    passwordId: string,
    passwordInfo: UpdatePasswordDto
  ): Promise<HttpResponse<Password> | any> {
    try {
      const apiLink = `${this.apiConnection.getLink()}/${
        this.route
      }/${passwordId}`;
      const authorization = this.tokenStorage.getAuthorization();

      return await this.httpRequest.patch(apiLink, passwordInfo, authorization);
    } catch (error: any) {
      return { error: true, message: error.message };
    }
  }

  public async delete(
    passwordId: string
  ): Promise<HttpResponse<Password> | any> {
    try {
      const apiLink = `${this.apiConnection.getLink()}/${
        this.route
      }/${passwordId}`;
      const authorization = this.tokenStorage.getAuthorization();

      return await this.httpRequest.delete(apiLink, authorization);
    } catch (error: any) {
      return { error: true, message: error.message };
    }
  }

  public async getOne(
    passwordId: string
  ): Promise<HttpResponse<Password> | any> {
    try {
      const apiLink = `${this.apiConnection.getLink()}/${
        this.route
      }/${passwordId}`;
      const authorization = this.tokenStorage.getAuthorization();

      return await this.httpRequest.get(apiLink, authorization);
    } catch (error: any) {
      return { error: true, message: error.message };
    }
  }

  public async getAll(): Promise<HttpResponse<Password[]> | any> {
    try {
      const apiLink = `${this.apiConnection.getLink()}/${this.route}`;
      const authorization = this.tokenStorage.getAuthorization();
      return await this.httpRequest.get(apiLink, authorization);
    } catch (error: any) {
      return { error: true, message: error.message };
    }
  }
}
