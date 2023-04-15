import { CreateUserDto } from "../../../../../domain/dtos/user/createUser-dto";
import { UpdateUserDto } from "../../../../../domain/dtos/user/updateUser-dto";
import { User } from "../../../../../domain/entities/user/user-entity";
import { HttpResponse } from "../../../../../domain/types/http/httpResponse-dto";
import { Message } from "../../../../../domain/types/message/message.type";

export interface UserRouterInterface {
  create(userInfo: CreateUserDto): Promise<HttpResponse<User> | Message>;
  update(
    userId: string,
    userInfo: UpdateUserDto
  ): Promise<HttpResponse<User> | Message>;
  delete(userId: string): Promise<HttpResponse<User> | Message>;
  getOne(userId: string): Promise<HttpResponse<User> | Message>;
}
