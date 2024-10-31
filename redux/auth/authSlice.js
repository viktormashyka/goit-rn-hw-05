import { createSlice } from "@reduxjs/toolkit";
import { registerDB } from "./authOperations";

const initialState = {
  user: { nickname: null, email: null, password: null, avatarUrl: null },
  status: "idle",
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerDB.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerDB.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user.nickname = action.payload.nickname;
        state.user.email = action.payload.email;
        state.user.password = action.payload.password;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerDB.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
