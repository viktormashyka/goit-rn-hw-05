import { combineReducers } from "@reduxjs/toolkit";
// import authSlice from "./auth/authSlice";
import postsSlice from "./posts/postsSlice";
import userReducer from "./user/userSlice.ts";

const rootReducer = combineReducers({
  // auth: authSlice,
  posts: postsSlice,
  user: userReducer,
});

export default rootReducer;
