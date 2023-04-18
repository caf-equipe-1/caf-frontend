import { CardRouterInterface } from "../../../abstract/api/routers/card/card-router-interface";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { TokenStorage } from "../../../storages/token-storage";
import { ApiConnection } from "../../connection/apiConnection";
import { CardRouter } from "../../routers/card/card-router";

export function makeCardRouterFactory(): CardRouterInterface {
  const httpRequest = new HttpRequestAdapter();
  const apiConnection = new ApiConnection();
  const tokenStorage = new TokenStorage();

  return new CardRouter(httpRequest, apiConnection, tokenStorage);
}
