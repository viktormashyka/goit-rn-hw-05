import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { addUser, updateUserInFirestore, getUser } from "./firestore";
import { AppDispatch } from "../redux/store";
import { setUserInfo, clearUserInfo } from "../redux/user/userSlice";

// Типи для реєстрації та авторизації
type AuthCredentials = {
  email: string;
  password: string;
  displayName?: string;
  photoURL?: string;
};

// Функція для реєстрації користувача
export const registerDB = async ({
  email,
  password,
  displayName = "Anonymous",
  photoURL = "",
}: AuthCredentials) => {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { user } = credentials;

    console.log("registerDB -> res: ", credentials);

    const res = await updateProfile(user, {
      displayName,
      photoURL,
    }); // FIXME: updateProfile is not working properly. On Posts screen user is displayed as Anonymous

    console.log("registerDB -> updateProfile res: ", res);

    await addUser(user.uid, {
      email: user.email || "",
      uid: user.uid,
      displayName,
      photoURL,
    });
  } catch (error) {
    console.log("RegisterDB error -> ", error); // TODO: handle error
  }
};

// Функція для логіну користувача та збереження його в Redux
export const loginDB = async ({ email, password }: AuthCredentials) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log("loginDB -> res: ", credentials);
  } catch (error) {
    console.log("LoginDB error -> ", error); // TODO: handle error
  }
};

// Функція для логауту
export const logoutDB = async (dispatch: AppDispatch) => {
  try {
    await signOut(auth);
    // Очистити інформацію про користувача у Redux
    dispatch(clearUserInfo());
  } catch (error) {
    console.error("Logout error:", error); // TODO: handle error
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
          email: user.email || "",
          displayName: user.displayName || "Anonymous",
          photoURL: user.photoURL || "",
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
      throw error; // TODO: handle error
    }
  }
};

// Отримання профілю користувача
export const fetchUser = async (dispatch: AppDispatch) => {
  const user = auth.currentUser;
  if (user) {
    try {
      const userInfo = await getUser(user.uid);
      if (userInfo) {
        dispatch(
          setUserInfo({
            ...userInfo,
          })
        );
      }
    } catch (error) {
      throw error; // TODO: handle error
    }
  }
};
