// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
// Функція для підключення аналітики в проект
import { getAnalytics } from "firebase/analytics";

// TODO: add ReactNativePersistance from tutor github
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_WEB_API_KEY,
  authDomain: "goit-socials-app-e1608.firebaseapp.com",
  databaseURL:
    "https://goit-socials-app-e1608-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "goit-socials-app-e1608",
  storageBucket: "goit-socials-app-e1608.appspot.com",
  messagingSenderId: "965261033666",
  appId: "1:965261033666:web:384e605d60194d28757b5b",
  measurementId: "G-XRTFSZFXNS",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
