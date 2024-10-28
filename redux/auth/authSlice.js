import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { nickname: null, email: null, password: null, avatarUrl: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onRegister: (state, { payload }) => {
      state.user.nickname = payload.nickname;
      state.user.email = payload.email;
      state.user.password = payload.password;
      state.user.avatarUrl = payload.avatarUrl;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    onLogIn: (state, { payload }) => {
      state.user.email = payload.email;
      state.user.password = payload.password;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    onLogOut: (state) => {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
