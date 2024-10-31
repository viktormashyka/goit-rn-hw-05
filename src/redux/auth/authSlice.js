// import { createSlice } from "@reduxjs/toolkit";
// import { registerDB, loginDB, logoutDB } from "./authOperations";

// const initialState = {
//   user: { nickname: null, email: null, password: null, avatarUrl: null },
//   status: "idle",
//   token: null,
//   isLoggedIn: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerDB.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(registerDB.fulfilled, (state, action) => {
//         console.log("authSlice -> payload ", action.payload);
//         state.status = "succeeded";
//         state.user.nickname = action.payload.nickname;
//         state.user.email = action.payload.email;
//         state.user.password = action.payload.password;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(registerDB.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(loginDB.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(loginDB.fulfilled, (state, action) => {
//         console.log("authSlice -> payload ", action.payload);
//         state.status = "succeeded";
//         state.user.nickname = action.payload.nickname;
//         state.user.email = action.payload.email;
//         state.user.password = action.payload.password;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(loginDB.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(logoutDB.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(logoutDB.fulfilled, (state, action) => {
//         console.log("authSlice -> payload ", action.payload);
//         state.status = "succeeded";
//         state.user.nickname = action.payload.nickname;
//         state.user.email = action.payload.email;
//         state.user.password = action.payload.password;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logoutDB.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       .addDefaultCase((state, action) => {});
//   },
// });

// export const authActions = authSlice.actions;

// export default authSlice.reducer;
