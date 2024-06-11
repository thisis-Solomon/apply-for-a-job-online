import { auth } from "./firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { reactive } from "vue";

export const authState = reactive({
  isAuthenticated: false,
});

export async function signup(email: string, password: string) {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const newUserCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = newUserCred.user;

    authState.isAuthenticated = !!user;
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function login(email: string, password: string) {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    authState.isAuthenticated = !!user;
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function logout() {
  try {
    await signOut(auth);
    authState.isAuthenticated = false;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

onAuthStateChanged(auth, (user) => {
  authState.isAuthenticated = !!user;
});
