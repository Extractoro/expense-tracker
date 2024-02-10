import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: { name: null, surname: null, email: null },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(authOperations.login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(authOperations.logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.user = { name: null, surname: null, email: null };
      })
      .addCase(authOperations.refreshCurrent.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = { ...action.payload };
      });
  },
});

export default authSlice.reducer;
