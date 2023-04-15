import { CreateUserDto } from "../../../domain/dtos/user/createUser-dto";
import { UpdateUserDto } from "../../../domain/dtos/user/updateUser-dto";
import { User } from "../../../domain/entities/user/user-entity";
import { HttpResponse } from "../../../domain/types/http/httpResponse-dto";
import { UserRouterInterface } from "../../abstract/routers/user/user-router-interface";

export class UserRouter implements UserRouterInterface {
  public create(userInfo: CreateUserDto): Promise<HttpResponse<User>> {
    throw new Error("Not implemented");
  }

  public update(
    userId: string,
    userInfo: UpdateUserDto
  ): Promise<HttpResponse<User>> {
    throw new Error("Not implemented");
  }

  public delete(userId: string): Promise<HttpResponse<User>> {
    throw new Error("Not implemented");
  }

  public getOne(userId: string): Promise<HttpResponse<User>> {
    throw new Error("Not implemented");
  }
}
