import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    value: "",
  },
  reducers: {
    setSearchContact(state, action) {
      state.value = action.payload;
    },
  },
});

export const setSearchContact = filtersSlice.actions;

export default filtersSlice.reducer;
