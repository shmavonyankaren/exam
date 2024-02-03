import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  textarea: "",
  select: "",
};

const reducers = {};
export const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers,
});

export const {} = formSlice.actions;

export default formSlice.reducer;
