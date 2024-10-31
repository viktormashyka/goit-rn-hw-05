import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { addUser, updateUserInFirestore } from "./firestore";
import { AppDispatch } from "../redux/store";
import { setUserInfo, clearUserInfo } from "../redux/user/userSlice";

// Типи для реєстрації та авторизації
type AuthCredentials = {
  email: string;
  password: string;
};

// Функція для реєстрації користувача
export const registerDB = async ({ email, password }: AuthCredentials) => {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { user } = credentials;

    console.log("registerDB -> res: ", credentials);

    await addUser(user.uid, { email: user.email || "", uid: user.uid });
  } catch (error) {
    console.log("RegisterDB error -> ", error);
  }
};

// Функція для логіну користувача та збереження його в Redux
export const loginDB = async (
  { email, password }: AuthCredentials,
  dispatch: AppDispatch
) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log("loginDB -> res: ", credentials);
    const user = credentials.user;

    dispatch(
      setUserInfo({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      })
    );
    return user;
  } catch (error) {
    console.log("LoginDB error -> ", error);
  }
};

// Функція для логауту
export const logoutDB = async (dispatch: AppDispatch) => {
  try {
    await signOut(auth);
    // Очистити інформацію про користувача у Redux
    dispatch(clearUserInfo());
  } catch (error) {
    console.error("Logout error:", error);
  }
};

// Відстеження змін у стані аутентифікації
export const authStateChanged = (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, (user) => {
    console.log("Auth state changed:", user);
    if (user) {
      dispatch(
        setUserInfo({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
    } else {
      dispatch(clearUserInfo());
    }
  });
};

// Оновлення профілю користувача
export const updateUserProfile = async (update: {
  displayName?: string;
  photoURL?: string;
}) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};
