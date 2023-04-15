import { PasswordRouterInterface } from "../../../abstract/api/routers/password/password-router-interface";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { TokenStorage } from "../../../storages/token-storage";
import { ApiConnection } from "../../connection/apiConnection";
import { PasswordRouter } from "../../routers/password/password-router";

export function makePasswordRouterFactory(): PasswordRouterInterface {
  const httpRequest = new HttpRequestAdapter();
  const apiConnection = new ApiConnection();
  const tokenStorage = new TokenStorage();

  return new PasswordRouter(httpRequest, apiConnection, tokenStorage);
}
