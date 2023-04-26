import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Document } from "../../domain/entities/document/document-entity";
import { UpdateDocumentDto } from "../../domain/dtos/document/updateDocument-dto";
import { CreateDocumentDto } from "../../domain/dtos/document/createDocument-dto";

type InitialState = {
  value: Document[];
};

const initialState: InitialState = { value: [] };

const documentSlice = createSlice({
  name: "Document",
  initialState,
  reducers: {
    addManyDocumentsStore(state, action: PayloadAction<Document[]>) {
      state.value = action.payload;
    },

    addDocumentStore(state, action: PayloadAction<CreateDocumentDto>) {
      const newState = state.value;
      newState.push({
        ...action.payload,
        id: "",
        createdAt: "",
        updatedAt: "",
      });
      state.value = newState;
    },

    updateDocumentStore(
      state,
      action: PayloadAction<{ id: string; body: UpdateDocumentDto }>
    ) {
      const newState = state.value;
      state.value = newState.map(function (item) {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          id: item.id,
          name: action.payload.body.name ?? item.name,
          document: action.payload.body.document ?? item.document,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        };
      });
    },

    deleteDocumentStore(state, action: PayloadAction<string>) {
      const newState = state.value;
      state.value = newState.filter(function (item) {
        return item.id !== action.payload;
      });
    },
  },
});

export const {
  addManyDocumentsStore,
  addDocumentStore,
  updateDocumentStore,
  deleteDocumentStore,
} = documentSlice.actions;
export default documentSlice.reducer;
