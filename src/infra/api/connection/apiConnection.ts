import { ApiConnectionInterface } from "../../abstract/api/connection/apiConnection-interface";

export class ApiConnection implements ApiConnectionInterface {
  private readonly link: string;

  public constructor() {
    this.link = "https://caf-backend-production-345a.up.railway.app";
  }

  public getLink(): string {
    return this.link;
  }
}
