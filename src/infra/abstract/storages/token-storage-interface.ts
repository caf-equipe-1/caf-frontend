export interface TokenStorageInterface {
  store(item: string): void;
  remove(): void;
  getAuthorization(): string;
}
