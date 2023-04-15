import { CreateUserDto } from "../../../../../domain/dtos/user/createUser-dto";
import { UpdateUserDto } from "../../../../../domain/dtos/user/updateUser-dto";
import { User } from "../../../../../domain/entities/user/user-entity";
import { HttpResponse } from "../../../../../domain/types/http/httpResponse-dto";

export interface UserRouterInterface {
  create(userInfo: CreateUserDto): Promise<HttpResponse<User>>;
  update(userId: string, userInfo: UpdateUserDto): Promise<HttpResponse<User>>;
  delete(userId: string): Promise<HttpResponse<User>>;
  getOne(userId: string): Promise<HttpResponse<User>>;
}
