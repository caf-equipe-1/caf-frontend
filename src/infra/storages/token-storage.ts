import { TokenStorageInterface } from "../abstract/storages/token-storage-interface";

export class TokenStorage implements TokenStorageInterface {
  private readonly variableName: string;

  public constructor() {
    this.variableName = "userAuthToken";
  }

  public store(item: string): void {
    localStorage.setItem(this.variableName, item);
  }

  public remove(): void {
    localStorage.removeItem(this.variableName);
  }

  public getAuthorization(): string {
    const token = localStorage.getItem(this.variableName) ?? "";

    return `Bearer ${token}`;
  }
}
