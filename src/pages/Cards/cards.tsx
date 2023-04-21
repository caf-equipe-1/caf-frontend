import { useEffect, useState } from "react";
import { FlexBody } from "../../components/flexBody";
import { Title } from "../../components/title";
import { HttpResponse } from "../../domain/types/http/httpResponse-dto";
import { makeCardRouterFactory } from "../../infra/api/factories/card/card-router-factory";
import { Card as CardEntity } from "../../domain/entities/card/card-entity";
import { Card } from "../../components/card";
import { ActionsTitle } from "../../components/actionsTitle";

export function Cards() {
  const [cards, setCards] = useState<CardEntity[]>([]);
  const cardRouter = makeCardRouterFactory();

  function getCardsFromApi() {
    cardRouter.getAll().then(function (response: HttpResponse<CardEntity[]>) {
      if (response.body) {
        setCards(response.body);
      }
    });
  }

  function deleteCard(cardId: string) {
    cardRouter.delete(cardId).then(() => {
      getCardsFromApi();
    });
  }

  function editCard(cardId: string) {
    alert("Implementar navegação para página de edição.");
  }

  function createCard() {
    alert("Implementar navegação para página de criação.");
  }

  function renderCards() {
    return cards.map(function (card, index) {
      return (
        <Card
          title={card.nickname}
          entityId={card.id}
          content={[
            {
              label: "Usuário",
              text: card.name,
            },
            {
              label: "Número",
              text: card.number.toString(),
            },
            {
              label: "Código de Segurança",
              text: card.securityCode.toString(),
            },
          ]}
          key={index}
          deleteCallback={deleteCard}
          editCallback={editCard}
        />
      );
    });
  }

  useEffect(function () {
    getCardsFromApi();
  }, []);

  return (
    <>
      <Title title="Cartões:" />
      <ActionsTitle createEntityCallback={createCard} />
      <FlexBody components={renderCards()} />
    </>
  );
}
