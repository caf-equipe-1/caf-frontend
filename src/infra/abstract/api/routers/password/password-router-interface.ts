import { CreatePasswordDto } from "../../../../../domain/dtos/password/createPassword-dto";
import { UpdatePasswordDto } from "../../../../../domain/dtos/password/updatePassword-dto";
import { Password } from "../../../../../domain/entities/password/password-entity";
import { HttpResponse } from "../../../../../domain/types/http/httpResponse-dto";
import { Message } from "../../../../../domain/types/message/message.type";

export interface PasswordRouterInterface {
  create(
    passwordInfo: CreatePasswordDto
  ): Promise<HttpResponse<Password> | Message>;
  update(
    passwordId: string,
    passwordInfo: UpdatePasswordDto
  ): Promise<HttpResponse<Password> | Message>;
  delete(passwordId: string): Promise<HttpResponse<Password> | Message>;
  getOne(passwordId: string): Promise<HttpResponse<Password> | Message>;
  getAll(): Promise<HttpResponse<Password[]> | Message>;
}
