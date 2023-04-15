import { CreatePasswordDto } from "../../../../domain/dtos/password/createPassword-dto";
import { UpdatePasswordDto } from "../../../../domain/dtos/password/updatePassword-dto";
import { Password } from "../../../../domain/entities/password/password-entity";
import { HttpResponse } from "../../../../domain/types/http/httpResponse-dto";
import { PasswordRouterInterface } from "../../../abstract/api/routers/password/password-router-interface";

export class PasswordRouter implements PasswordRouterInterface {
  public create(
    passwordInfo: CreatePasswordDto
  ): Promise<HttpResponse<Password>> {
    throw new Error("Not implemented");
  }

  public update(
    passwordId: string,
    passwordInfo: UpdatePasswordDto
  ): Promise<HttpResponse<Password>> {
    throw new Error("Not implemented");
  }

  public delete(passwordId: string): Promise<HttpResponse<Password>> {
    throw new Error("Not implemented");
  }

  public getOne(passwordId: string): Promise<HttpResponse<Password>> {
    throw new Error("Not implemented");
  }

  public getAll(): Promise<HttpResponse<Password[]>> {
    throw new Error("Not implemented");
  }
}
