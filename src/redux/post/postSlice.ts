import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../user/userSlice";

type Comment = {
  id: string;
  author: UserState["userInfo"];
  comment: string;
  dateTime: string;
};

type Post = {
  id: string;
  pictureUrl: string;
  pictureName: string;
  comments: Comment[];
  locality: string;
  geoLocation?: { latitude: number; longitude: number };
};

type PostState = {
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
    // setPostInfo(state, action: PayloadAction<PostState["data"]>) {
    //   state.data = action.payload;
    // },
    // clearPostInfo(state) {
    //   state.data = [];
    // },
  },
});

export const { addPost, removePost, updatePost, addComment } =
  postSlice.actions;

export default postSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import initialData from "../../../data/data";

// const initialState = {
//   data: [...initialData],
// };

// const postSlice = createSlice({
//   name: "post",
//   initialState,
//   reducers: {
//     onAddPost: (state, { payload }) => {
//       state.data.push(payload);
//     },
//     onRemovePost: (state, { payload }) => {
//       state.data = state.data.filter((post) => post.id !== payload);
//     },
//     onUpdatePost: (state, { payload }) => {
//       const index = state.data.findIndex((post) => post.id === payload.id);
//       state.data[index] = payload;
//     },
//     onAddComment: (state, { payload }) => {
//       console.log({ payload });
//       const index = state.data.findIndex((post) => post.id === payload.id);
//       state.data[index].comments.push(payload.comment);
//     },
//   },
// });

// export const postActions = postSlice.actions;

// export default postSlice.reducer;
