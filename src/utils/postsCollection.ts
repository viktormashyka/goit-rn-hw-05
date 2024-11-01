import { auth } from "../../firebaseConfig";
import { Post } from "../redux/post/postSlice";
import { getCurrentDateTime } from "./getCurrentTime";
import uuid from "react-native-uuid";
import { getPosts, addPost, getPostDocId, updatePost } from "./firestore";

export const addPostToDB = async (post: Post) => {
  const user = auth.currentUser;
  console.log("addPostToDB -> user", user);
  if (user) {
    try {
      console.log("addPostToDB -> post", post);
      await addPost({ ...post, uid: user.uid });
    } catch (error) {
      throw error; // TODO: handle error
    }
  }
};

export const getPostsFromDB = async () => {
  const user = auth.currentUser;
  if (user) {
    try {
      const posts = await getPosts(user.uid);
      console.log("getPostsFromDB -> posts", posts);
      return posts;
    } catch (error) {
      throw error; // TODO: handle error
    }
  }
};

export const updatePostAtDB = async (postId, comment) => {
  const result = await getPostDocId(postId);
  const user = auth.currentUser;
  const dateTime = getCurrentDateTime();
  const completedComment = {
    ...comment,
    id: uuid.v4(),
    author: {
      id: user?.uid,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
    },
    dateTime: dateTime,
  };

  if (result) {
    const { docId, docData } = result;

    if (docId) {
      try {
        await updatePost(docId, docData.comments || [], completedComment);
        console.log("updatePostAtDB -> comment added");
      } catch (error) {
        console.error("Error updating post:", error);
        throw error; // TODO: handle error
      }
    }
  }
};
