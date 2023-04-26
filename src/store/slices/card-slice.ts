import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../domain/entities/card/card-entity";
import { UpdateCardDto } from "../../domain/dtos/card/updateCard-dto";
import { CreateCardDto } from "../../domain/dtos/card/createCard-dto";

type InitialState = {
  value: Card[];
};

const initialState: InitialState = { value: [] };

const cardSlice = createSlice({
  name: "Card",
  initialState,
  reducers: {
    addManyCardsStore(state, action: PayloadAction<Card[]>) {
      state.value = action.payload;
    },

    addCardStore(state, action: PayloadAction<CreateCardDto>) {
      const newState = state.value;
      newState.push({
        ...action.payload,
        id: "",
        createdAt: "",
        updatedAt: "",
      });
      state.value = newState;
    },

    updateCardStore(
      state,
      action: PayloadAction<{ id: string; body: UpdateCardDto }>
    ) {
      const newState = state.value;
      state.value = newState.map(function (item) {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          id: item.id,
          name: action.payload.body.name ?? item.name,
          nickname: action.payload.body.nickname ?? item.nickname,
          number: action.payload.body.number ?? item.number,
          password: action.payload.body.password ?? item.password,
          securityCode: action.payload.body.securityCode ?? item.securityCode,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        };
      });
    },

    deleteCardStore(state, action: PayloadAction<string>) {
      const newState = state.value;
      state.value = newState.filter(function (item) {
        return item.id !== action.payload;
      });
    },
  },
});

export const {
  addManyCardsStore,
  addCardStore,
  updateCardStore,
  deleteCardStore,
} = cardSlice.actions;
export default cardSlice.reducer;
