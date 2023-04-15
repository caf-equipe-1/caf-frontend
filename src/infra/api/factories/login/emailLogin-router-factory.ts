import { EmailLoginRouterInterface } from "../../../abstract/api/routers/login/emailLogin-router-interface";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { TokenStorage } from "../../../storages/token-storage";
import { ApiConnection } from "../../connection/apiConnection";
import { EmailLoginRouter } from "../../routers/login/emailLogin-router";

export function makeEmailLoginRouterFactory(): EmailLoginRouterInterface {
  const httpRequest = new HttpRequestAdapter();
  const apiConnection = new ApiConnection();
  const tokenStorage = new TokenStorage();

  return new EmailLoginRouter(httpRequest, apiConnection, tokenStorage);
}
