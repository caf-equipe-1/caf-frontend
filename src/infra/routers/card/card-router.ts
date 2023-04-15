import { CreateCardDto } from "../../../domain/dtos/card/createCard-dto";
import { UpdateCardDto } from "../../../domain/dtos/card/updateCard-dto";
import { Card } from "../../../domain/entities/card/card-entity";
import { HttpResponse } from "../../../domain/types/http/httpResponse-dto";
import { CardRouterInterface } from "../../abstract/routers/card/card-router-interface";

export class CardRouter implements CardRouterInterface {
  public create(cardInfo: CreateCardDto): Promise<HttpResponse<Card>> {
    throw new Error("Not implemented");
  }

  public update(
    cardId: string,
    cardInfo: UpdateCardDto
  ): Promise<HttpResponse<Card>> {
    throw new Error("Not implemented");
  }

  public delete(cardId: string): Promise<HttpResponse<Card>> {
    throw new Error("Not implemented");
  }

  public getOne(cardId: string): Promise<HttpResponse<Card>> {
    throw new Error("Not implemented");
  }

  public getAll(): Promise<HttpResponse<Card[]>> {
    throw new Error("Not implemented");
  }
}
