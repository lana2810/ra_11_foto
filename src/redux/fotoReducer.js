import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const fotoSlice = createSlice({
  name: "foto",
  initialState: {
    items: [],
  },
  reducers: {
    add(state, action) {
      state.items.push({ id: nanoid(), url: action.payload });
    },
    remove(state, action) {
      state.items = state.items.filter((it) => it.id !== action.payload);
    },
  },
});

export const { add, remove } = fotoSlice.actions;

export default fotoSlice.reducer;
