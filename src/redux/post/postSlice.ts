import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../user/userSlice";

type Comment = {
  id: string;
  author: UserState["userInfo"];
  comment: string;
  dateTime: string;
};

export type Post = {
  id: string;
  pictureUrl: string;
  pictureName: string;
  comments: Comment[];
  locality: string;
  geoLocation?: { latitude: number; longitude: number };
  uid: string;
};

export type PostState = {
  data: Post[];
};

const initialState: PostState = {
  data: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostState["data"]>) => {
      state.data.push(action.payload);
    },
    removePost: (state, action: PayloadAction<PostState["data"]>) => {
      state.data = state.data.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action: PayloadAction<PostState["data"]>) => {
      const index = state.data.findIndex(
        (post) => post.id === action.payload.id
      );
      state.data[index] = payload;
    },
    addComment: (state, action: PayloadAction<PostState["data"]>) => {
      const index = state.data.findIndex(
        (post) => post.id === action.payload.id
      );
      state.data[index].comments.push(action.payload.comment);
    },
    updateComments: (state, action: PayloadAction<PostState["data"]>) => {
      const index = state.data.findIndex(
        (post) => post.id === action.payload.id
      );
      state.data[index].comments = action.payload.comments;
    },
    setPosts(state, action: PayloadAction<UserState["userInfo"]>) {
      state.data = action.payload;
    },
  },
});

export const { addPost, removePost, updatePost, addComment, setPosts } =
  postSlice.actions;

export default postSlice.reducer;
