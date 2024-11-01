import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Post } from "../redux/post/postSlice";

type UserData = {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}; // TODO: move to types

// Функція для додавання документа до колекції user
export const addUser = async (userId: string, userData: UserData) => {
  try {
    await setDoc(doc(db, "users", userId), userData);
    console.log("User added -> ", userId);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

// Функція для отримання документа з колекції user
export const getUser = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("Not such document!");
  }
};

// Функція для запису даних користувача у Firestore колекції user
export const updateUserInFirestore = async (user: any) => {
  try {
    await setDoc(
      doc(db, "users", user.uid),
      {
        email: user.email,
        displayName: user.displayName || "Anonymous", // Якщо displayName недоступний
        lastLogin: new Date().toISOString(), // Додати дату останнього логіну
      },
      { merge: true } // merge: true - для оновлення існуючого документа або створення нового
    );
    console.log("User data saved to Firestore:", user.uid);
  } catch (error) {
    console.error("Error saving user data to Firestore:", error);
  }
};

// // Функція для додавання документа до колекції post
// export const addPost = async (userId: string, postData: Post) => {
//   try {
//     await setDoc(doc(db, "posts", userId), postData);
//     console.log("Post added -> ", userId);
//   } catch (error) {
//     console.error("Error adding post:", error);
//   }
// };
