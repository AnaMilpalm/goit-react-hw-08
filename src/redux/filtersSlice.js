import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "searchContact",
  initialState: {
    status: "all",
  },
  reducers: {
    setSearchContact(state, action) {
      state.find = action.payload;
    },
  },
});

export const setSearchContact = slice.actions;

export default slice.reducer;
