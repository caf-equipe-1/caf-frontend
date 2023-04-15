import { CreateCardDto } from "../../../../domain/dtos/card/createCard-dto";
import { UpdateCardDto } from "../../../../domain/dtos/card/updateCard-dto";
import { Card } from "../../../../domain/entities/card/card-entity";
import { HttpResponse } from "../../../../domain/types/http/httpResponse-dto";
import { ApiConnectionInterface } from "../../../abstract/api/connection/apiConnection-interface";
import { CardRouterInterface } from "../../../abstract/api/routers/card/card-router-interface";
import { HttpRequestAdapterInterface } from "../../../abstract/helpers/adapters/httpRequest-adapter-interface";
import { TokenStorageInterface } from "../../../abstract/storages/token-storage-interface";

export class CardRouter implements CardRouterInterface {
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
    this.route = "cards";
  }

  public async create(cardInfo: CreateCardDto): Promise<HttpResponse<Card>> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.post(apiLink, cardInfo, authorization);
  }

  public async update(
    cardId: string,
    cardInfo: UpdateCardDto
  ): Promise<HttpResponse<Card>> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}/${cardId}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.patch(apiLink, cardInfo, authorization);
  }

  public async delete(cardId: string): Promise<HttpResponse<Card>> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}/${cardId}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.delete(apiLink, authorization);
  }

  public async getOne(cardId: string): Promise<HttpResponse<Card>> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}/${cardId}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.get(apiLink, authorization);
  }

  public async getAll(): Promise<HttpResponse<Card[]>> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.get(apiLink, authorization);
  }
}
