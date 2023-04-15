import { SelfieLoginRouterInterface } from "../../../abstract/api/routers/login/selfieLogin-router-interface";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { TokenStorage } from "../../../storages/token-storage";
import { ApiConnection } from "../../connection/apiConnection";
import { SelfieLoginRouter } from "../../routers/login/selfieLogin-router";

export function makeSelfieLoginRouterFactory(): SelfieLoginRouterInterface {
  const httpRequest = new HttpRequestAdapter();
  const apiConnection = new ApiConnection();
  const tokenStorage = new TokenStorage();

  return new SelfieLoginRouter(httpRequest, apiConnection, tokenStorage);
}
