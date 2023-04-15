import { UserRouterInterface } from "../../../abstract/api/routers/user/user-router-interface";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { TokenStorage } from "../../../storages/token-storage";
import { ApiConnection } from "../../connection/apiConnection";
import { UserRouter } from "../../routers/user/user-router";

export function makeUserRouterFactory(): UserRouterInterface {
  const httpRequest = new HttpRequestAdapter();
  const apiConnection = new ApiConnection();
  const tokenStorage = new TokenStorage();

  return new UserRouter(httpRequest, apiConnection, tokenStorage);
}
