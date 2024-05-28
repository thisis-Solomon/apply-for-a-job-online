import { auth } from "./firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { reactive } from "vue";

export const authState = reactive({
  isAuthenticated: false,
});

export async function signup(email, password) {
  try {
    const newUserCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = newUserCred.user;

    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function login(email, password) {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    if (user) {
      authState.isAuthenticated = true;
    }

    return user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function logout() {
  try {
    authState.isAuthenticated = false;
    signOut(auth);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
