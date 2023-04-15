import { CreateCardDto } from "../../../../../domain/dtos/card/createCard-dto";
import { UpdateCardDto } from "../../../../../domain/dtos/card/updateCard-dto";
import { Card } from "../../../../../domain/entities/card/card-entity";
import { HttpResponse } from "../../../../../domain/types/http/httpResponse-dto";
import { Message } from "../../../../../domain/types/message/message.type";

export interface CardRouterInterface {
  create(cardInfo: CreateCardDto): Promise<HttpResponse<Card> | Message>;
  update(
    cardId: string,
    cardInfo: UpdateCardDto
  ): Promise<HttpResponse<Card> | Message>;
  delete(cardId: string): Promise<HttpResponse<Card> | Message>;
  getOne(cardId: string): Promise<HttpResponse<Card> | Message>;
  getAll(): Promise<HttpResponse<Card[]> | Message>;
}
