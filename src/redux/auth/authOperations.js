// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../../../firebaseConfig";

// export const registerDB = createAsyncThunk(
//   "auth/signup",
//   async (credentials, thunkAPI) => {
//     const { email, password } = credentials;
//     console.log({ credentials });
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);

//       console.log("registerDB -> res: ", res);
//     } catch (error) {
//       // throw error;
//       console.log(error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const loginDB = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const credentials = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log("loginDB -> res: ", credentials);
//       return credentials.user;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logoutDB = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const authStateChanged = async (onChange = () => {}) => {
//   onAuthStateChanged((user) => {
//     onChange(user);
//   });
// };

// export const updateUserProfile = async (update) => {
//   const user = auth.currentUser;

//   // якщо такий користувач знайдений
//   if (user) {
//     // оновлюємо його профайл
//     try {
//       await updateProfile(user, update);
//     } catch (error) {
//       throw error;
//     }
//   }
// };
