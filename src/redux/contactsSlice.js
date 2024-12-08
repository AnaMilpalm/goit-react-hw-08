import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: 0, name: "Rosie Simpson", number: "443-91-26", delete: false },
      { id: 1, name: "Hermione Kline", number: "443-92-23", delete: false },
      { id: 2, name: "Annie Copeland", number: "423-91-21", delete: false },
      { id: 3, name: "Eden Clements", number: "443-91-18", delete: false },
    ],
  },

  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
