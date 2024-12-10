import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchAllContacts } from "./operations";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })

      .addCase(fetchAllContacts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default slice.reducer;

export const selectAllContacts = (state) => state.contacts.items;
export const selectIsError = (state) => state.contacts.isError;
export const selectIsLoading = (state) => state.contacts.isLoading;
