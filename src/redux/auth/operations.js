import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = axios.create({
  baseURL: "",
});

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await getData.post("/users/singup", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
