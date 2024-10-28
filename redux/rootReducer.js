import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import postsSlice from "./posts/postsSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  posts: postsSlice,
});

export default rootReducer;
