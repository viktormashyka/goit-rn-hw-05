import { combineReducers } from "@reduxjs/toolkit";
// import authSlice from "./auth/authSlice";
import postsSlice from "./posts/postsSlice";
import userReducer from "./user/userSlice.ts";
import postReducer from "./post/postSlice.ts";

const rootReducer = combineReducers({
  // auth: authSlice,
  posts: postsSlice,
  user: userReducer,
  post: postReducer,
});

export default rootReducer;
