import { CreateDocumentDto } from "../../../../domain/dtos/document/createDocument-dto";
import { UpdateDocumentDto } from "../../../../domain/dtos/document/updateDocument-dto";
import { Document } from "../../../../domain/entities/document/document-entity";
import { HttpResponse } from "../../../../domain/types/http/httpResponse-dto";
import { ApiConnectionInterface } from "../../../abstract/api/connection/apiConnection-interface";
import { DocumentRouterInterface } from "../../../abstract/api/routers/document/document-router-interface";
import { HttpRequestAdapterInterface } from "../../../abstract/helpers/adapters/httpRequest-adapter-interface";
import { TokenStorageInterface } from "../../../abstract/storages/token-storage-interface";

export class DocumentRouter implements DocumentRouterInterface {
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
    this.route = "documents";
  }

  public async create(
    documentInfo: CreateDocumentDto
  ): Promise<HttpResponse<Document>> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.post(apiLink, documentInfo, authorization);
  }

  public async update(
    documentId: string,
    documentInfo: UpdateDocumentDto
  ): Promise<HttpResponse<Document>> {
    const apiLink = `${this.apiConnection.getLink()}/${
      this.route
    }/${documentId}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.patch(apiLink, documentInfo, authorization);
  }

  public async delete(documentId: string): Promise<HttpResponse<Document>> {
    const apiLink = `${this.apiConnection.getLink()}/${
      this.route
    }/${documentId}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.delete(apiLink, authorization);
  }

  public async getOne(documentId: string): Promise<HttpResponse<Document>> {
    const apiLink = `${this.apiConnection.getLink()}/${
      this.route
    }/${documentId}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.get(apiLink, authorization);
  }

  public async getAll(): Promise<HttpResponse<Document[]>> {
    const apiLink = `${this.apiConnection.getLink()}/${this.route}`;
    const authorization = this.tokenStorage.getAuthorization();

    return await this.httpRequest.get(apiLink, authorization);
  }
}
