import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Password } from "../../domain/entities/password/password-entity";
import { UpdatePasswordDto } from "../../domain/dtos/password/updatePassword-dto";
import { CreatePasswordDto } from "../../domain/dtos/password/createPassword-dto";

type InitialState = {
  value: Password[];
};

const initialState: InitialState = { value: [] };

const passwordSlice = createSlice({
  name: "Password",
  initialState,
  reducers: {
    addManyPasswordsStore(state, action: PayloadAction<Password[]>) {
      state.value = action.payload;
    },

    addPasswordStore(state, action: PayloadAction<CreatePasswordDto>) {
      const newState = state.value;
      newState.push({
        ...action.payload,
        id: "",
        createdAt: "",
        updatedAt: "",
      });
      state.value = newState;
    },

    updatePasswordStore(
      state,
      action: PayloadAction<{ id: string; body: UpdatePasswordDto }>
    ) {
      const newState = state.value;
      state.value = newState.map(function (item) {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          id: item.id,
          name: action.payload.body.name ?? item.name,
          password: action.payload.body.password ?? item.password,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        };
      });
    },

    deletePasswordStore(state, action: PayloadAction<string>) {
      const newState = state.value;
      state.value = newState.filter(function (item) {
        return item.id !== action.payload;
      });
    },
  },
});

export const {
  addManyPasswordsStore,
  addPasswordStore,
  updatePasswordStore,
  deletePasswordStore,
} = passwordSlice.actions;
export default passwordSlice.reducer;
