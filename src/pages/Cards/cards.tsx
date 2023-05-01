import { useEffect, useState } from "react";
import { FlexBody } from "../../components/flexBody";
import { Title } from "../../components/title";
import { HttpResponse } from "../../domain/types/http/httpResponse-dto";
import { makeCardRouterFactory } from "../../infra/api/factories/card/card-router-factory";
import { Card as CardEntity } from "../../domain/entities/card/card-entity";
import { Card } from "../../components/card";
import { ActionsTitle } from "../../components/actionsTitle";
import { CreateCardDto } from "../../domain/dtos/card/createCard-dto";
import { UpdateCardDto } from "../../domain/dtos/card/updateCard-dto";
import { Form } from "../../components/Form";
import { Modal } from "../../components/modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addCardStore,
  addManyCardsStore,
  deleteCardStore,
  updateCardStore,
} from "../../store/slices/card-slice";

export function Cards() {
  const dispatch = useDispatch();
  const storedCards = useSelector((state: RootState) => state.cards.value);
  const cardRouter = makeCardRouterFactory();
  const [openCreationModal, setOpenCreationModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [createdCard, setCreatedCard] = useState<CreateCardDto>({
    nickname: "",
    password: 0,
    name: "",
    number: 0,
    securityCode: 0,
  });
  const [updatedCard, setUpdatedCard] = useState<UpdateCardDto>({
    nickname: "",
    password: 0,
    name: "",
    number: 0,
    securityCode: 0,
  });
  const [updatedCardId, setUpdatedCardId] = useState<string>("");

  function validateCreationFields() {
    if (createdCard.nickname.toString().trim() === "") {
      alert("Preencha o nome o cartão");
      return false;
    }

    if (
      createdCard.password.toString().trim() === "" ||
      createdCard.password.toString().trim() === "0"
    ) {
      alert("Preencha a senha");
      return false;
    }

    if (createdCard.name.toString().trim() === "") {
      alert("Preencha o nome do titular do cartão");
      return false;
    }

    if (
      createdCard.number.toString().trim() === "" ||
      createdCard.number.toString().trim() === "0"
    ) {
      alert("Preencha o número do cartão");
      return false;
    }

    if (
      createdCard.securityCode.toString().trim() === "" ||
      createdCard.securityCode.toString().trim() === "0"
    ) {
      alert("Preencha o código de segurança");
      return false;
    }

    return true;
  }

  function getCardsFromApi() {
    cardRouter.getAll().then(function (response: HttpResponse<CardEntity[]>) {
      if (response.body) {
        dispatch(addManyCardsStore(response.body));
      }
    });
  }

  function deleteCard(cardId: string) {
    if (window.confirm("Deseja apagar esse cartão?")) {
      dispatch(deleteCardStore(cardId));
      cardRouter.delete(cardId).then(function (response) {
        if (response.error) {
          alert(response.message);
          getCardsFromApi();
        }
      });
    }
  }

  function renderCards() {
    return storedCards.map(function (card, index) {
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
              hide: true,
            },
            {
              label: "Código de Segurança",
              text: card.securityCode.toString(),
              hide: true,
            },
            {
              label: "Senha",
              text: card.password.toString(),
              hide: true,
            },
          ]}
          key={index}
          deleteCallback={deleteCard}
          editCallback={openUpdateCardModal}
        />
      );
    });
  }

  function openCreateCardModal() {
    setCreatedCard({
      nickname: "",
      name: "",
      number: 0,
      securityCode: 0,
      password: 0,
    });

    setOpenCreationModal(true);
  }

  function createCard() {
    if (!validateCreationFields()) {
      return;
    }

    dispatch(addCardStore(createdCard));
    setOpenCreationModal(false);

    cardRouter
      .create(createdCard)
      .then(function (response) {
        if (response.error) {
          alert(response.message);
        }
      })
      .finally(function () {
        getCardsFromApi();
      });
  }

  function onNickameChangeCreate(inputNickname: string) {
    setCreatedCard({ ...createdCard, nickname: inputNickname });
  }

  function onNameChangeCreate(inputName: string) {
    setCreatedCard({ ...createdCard, name: inputName });
  }

  function onNumberChangeCreate(inputNumber: number) {
    setCreatedCard({ ...createdCard, number: Number(inputNumber) });
  }

  function onSecurityCodeChangeCreate(inputSecurityCode: number) {
    setCreatedCard({ ...createdCard, securityCode: Number(inputSecurityCode) });
  }

  function onPasswordChangeCreate(inputPassword: number) {
    setCreatedCard({ ...createdCard, password: Number(inputPassword) });
  }

  function createCardForm() {
    return (
      <Form
        title="Adicionar Cartão"
        fields={[
          {
            label: "Nome",
            inputType: "text",
            onChangeCallback: onNickameChangeCreate,
            placeholder: "Nome do Cartão",
          },
          {
            label: "Titular",
            inputType: "text",
            onChangeCallback: onNameChangeCreate,
            placeholder: "Nome impresso no cartão",
          },
          {
            label: "Número",
            inputType: "number",
            onChangeCallback: onNumberChangeCreate,
            placeholder: "Número do cartão",
          },
          {
            label: "Código de segurança",
            inputType: "number",
            onChangeCallback: onSecurityCodeChangeCreate,
            placeholder: "Código de segurança do cartão",
          },
          {
            label: "Senha",
            inputType: "number",
            onChangeCallback: onPasswordChangeCreate,
            placeholder: "Senha do cartão",
          },
        ]}
        buttons={[
          {
            label: "Enviar",
            onClickCallback: createCard,
            color: "white",
            backGroundColor: "LimeGreen",
          },
        ]}
      />
    );
  }

  function openUpdateCardModal(cardId: string) {
    const foundCard = storedCards.find(function (item) {
      return item.id.toString() === cardId.toString();
    });

    if (foundCard) {
      setUpdatedCard(foundCard);
      setUpdatedCardId(cardId);
    }

    setOpenUpdateModal(true);
  }

  function updateCard() {
    dispatch(updateCardStore({ id: updatedCardId, body: updatedCard }));
    setOpenUpdateModal(false);

    cardRouter
      .update(updatedCardId, updatedCard)
      .then(function (response) {
        if (response.error) {
          alert(response.message);
        }
      })
      .finally(function () {
        getCardsFromApi();
      });
  }

  function onNickameChangeUpdate(inputNickname: string) {
    setUpdatedCard({ ...updatedCard, nickname: inputNickname });
  }

  function onNameChangeUpdate(inputName: string) {
    setUpdatedCard({ ...updatedCard, name: inputName });
  }

  function onNumberChangeUpdate(inputNumber: number) {
    setUpdatedCard({ ...updatedCard, number: Number(inputNumber) });
  }

  function onSecurityCodeChangeUpdate(inputSecurityCode: number) {
    setUpdatedCard({ ...updatedCard, securityCode: Number(inputSecurityCode) });
  }

  function onPasswordChangeUpdate(inputPassword: number) {
    setUpdatedCard({ ...updatedCard, password: Number(inputPassword) });
  }

  function updateCardForm() {
    return (
      <Form
        title="Editar Cartão"
        fields={[
          {
            label: "Nome",
            inputType: "text",
            onChangeCallback: onNickameChangeUpdate,
            defaultValue: updatedCard.nickname,
            placeholder: "Nome do Cartão",
          },
          {
            label: "Titular",
            inputType: "text",
            onChangeCallback: onNameChangeUpdate,
            defaultValue: updatedCard.name,
            placeholder: "Nome impresso no cartão",
          },
          {
            label: "Número",
            inputType: "number",
            onChangeCallback: onNumberChangeUpdate,
            defaultValue: updatedCard.number?.toString(),
            placeholder: "Número do cartão",
          },
          {
            label: "Código de segurança",
            inputType: "number",
            onChangeCallback: onSecurityCodeChangeUpdate,
            defaultValue: updatedCard.securityCode?.toString(),
            placeholder: "Código de segurança do cartão",
          },
          {
            label: "Senha",
            inputType: "number",
            onChangeCallback: onPasswordChangeUpdate,
            defaultValue: updatedCard.password?.toString(),
            placeholder: "Senha do cartão",
          },
        ]}
        buttons={[
          {
            label: "Enviar",
            onClickCallback: updateCard,
            color: "white",
            backGroundColor: "LimeGreen",
          },
        ]}
      />
    );
  }

  return (
    <>
      <Title title="Cartões:" />
      <ActionsTitle createEntityCallback={openCreateCardModal} />
      <FlexBody components={renderCards()} />
      <Modal
        show={openCreationModal}
        setShowCallback={setOpenCreationModal}
        content={createCardForm()}
      />
      <Modal
        show={openUpdateModal}
        setShowCallback={setOpenUpdateModal}
        content={updateCardForm()}
      />
    </>
  );
}
