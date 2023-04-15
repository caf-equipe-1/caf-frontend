import { DocumentRouterInterface } from "../../../abstract/api/routers/document/document-router-interface";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { TokenStorage } from "../../../storages/token-storage";
import { ApiConnection } from "../../connection/apiConnection";
import { DocumentRouter } from "../../routers/document/document-router";

export function makeDocumentRouterFactory(): DocumentRouterInterface {
  const httpRequest = new HttpRequestAdapter();
  const apiConnection = new ApiConnection();
  const tokenStorage = new TokenStorage();

  return new DocumentRouter(httpRequest, apiConnection, tokenStorage);
}
