import { createSlice } from "@reduxjs/toolkit";
import initialData from "../../../data/data";

const initialState = {
  data: [...initialData],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    onAddPost: (state, { payload }) => {
      state.data.push(payload);
    },
    onRemovePost: (state, { payload }) => {
      state.data = state.data.filter((post) => post.id !== payload);
    },
    onUpdatePost: (state, { payload }) => {
      const index = state.data.findIndex((post) => post.id === payload.id);
      state.data[index] = payload;
    },
    onAddComment: (state, { payload }) => {
      console.log({ payload });
      const index = state.data.findIndex((post) => post.id === payload.id);
      state.data[index].comments.push(payload.comment);
    },
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
