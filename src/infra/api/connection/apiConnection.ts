import { ApiConnectionInterface } from "../../abstract/api/connection/apiConnection-interface";

export class ApiConnection implements ApiConnectionInterface {
  private readonly link: string;

  public constructor() {
    this.link = "http://localhost:7777";
  }

  public getLink(): string {
    return this.link;
  }
}
