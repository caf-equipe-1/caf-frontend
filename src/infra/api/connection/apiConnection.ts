import { ApiConnectionInterface } from "../../abstract/api/connection/apiConnection-interface";

export class ApiConnection implements ApiConnectionInterface {
  private readonly link: string;

  public constructor() {
    this.link = "https://github.com/caf-equipe-1/caf-backend";
  }

  public getLink(): string {
    return this.link;
  }
}
