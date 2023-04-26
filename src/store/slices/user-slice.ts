import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../domain/entities/user/user-entity";
import { UpdateUserDto } from "../../domain/dtos/user/updateUser-dto";

type InitialState = {
  value: User;
};

const initialState: InitialState = {
  value: {
    id: "",
    name: "",
    email: "",
    password: "",
    photo: "",
    cpf: "",
    passwords: [],
    documents: [],
    cards: [],
    createdAt: "",
    updatedAt: "",
  },
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.value = action.payload;
    },

    editUser(state, action: PayloadAction<UpdateUserDto>) {
      state.value = {
        id: state.value.id,
        name: action.payload.name ?? state.value.name,
        email: action.payload.email ?? state.value.email,
        password: action.payload.password ?? state.value.password,
        photo: action.payload.photo ?? state.value.photo,
        cpf: action.payload.cpf ?? state.value.cpf,
        passwords: state.value.passwords,
        documents: state.value.documents,
        cards: state.value.cards,
        createdAt: state.value.createdAt,
        updatedAt: state.value.updatedAt,
      };
    },
  },
});

export const { addUser, editUser } = userSlice.actions;
export default userSlice.reducer;
