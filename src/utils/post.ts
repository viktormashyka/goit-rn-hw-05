import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import { Post } from "../redux/post/postSlice";

export const addPost = async (postData: Post) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), postData);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
// export const addPost = async (userId: string, postData: Post) => {
//   try {
//     const docRef = await setDoc(doc(db, "posts", userId.id), postData);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (error) {
//     console.error("Error adding document: ", error);
//     throw error;
//   }
// };

// Функція для додавання поста до колекції post
export const addPostToDB = async (post: Post) => {
  const user = auth.currentUser;
  if (user) {
    try {
      console.log("addPostToDB -> post", post);
      //   await addPost(user.uid, { ...post, uid: user.uid });
      await addPost({ ...post, uid: user.uid });
    } catch (error) {
      throw error; // TODO: handle error
    }
  }
};

// Функція для отримання документів з колекції post
export const getPosts = async (uid) => {
  uid = "okdL3eG3QbUwEB9GmnoOeRIUMmn2";
  try {
    const snapshot = await getDocs(collection(db, "posts"));
    const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log("getPosts -> posts", posts);
    return posts;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
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

// Приклад отримання даних із бази:
const getDataFromFirestore = async () => {
  try {
    const snapshot = await getDocs(collection(db, "users"));
    // Перевіряємо у консолі отримані дані
    snapshot.forEach((doc) => console.log(`${doc.id} =>`, doc.data()));
    // Повертаємо масив обʼєктів у довільній формі
    return snapshot.map((doc) => ({ id: doc.id, data: doc.data() }));
  } catch (error) {
    console.log(error);
    throw error;
  }
};
