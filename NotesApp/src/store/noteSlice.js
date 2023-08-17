// src/store/notesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push({ text: action.payload.text, color: action.payload.color });
    },
  },
});

export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;
