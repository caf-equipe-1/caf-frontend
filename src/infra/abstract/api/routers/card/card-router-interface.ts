import { CreateCardDto } from "../../../../../domain/dtos/card/createCard-dto";
import { UpdateCardDto } from "../../../../../domain/dtos/card/updateCard-dto";
import { Card } from "../../../../../domain/entities/card/card-entity";
import { HttpResponse } from "../../../../../domain/types/http/httpResponse-dto";
import { Message } from "../../../../../domain/types/message/message.type";

export interface CardRouterInterface {
  create(cardInfo: CreateCardDto): Promise<HttpResponse<Card>>;
  update(cardId: string, cardInfo: UpdateCardDto): Promise<HttpResponse<Card>>;
  delete(cardId: string): Promise<HttpResponse<Card>>;
  getOne(cardId: string): Promise<HttpResponse<Card>>;
  getAll(): Promise<HttpResponse<Card[]>>;
}
