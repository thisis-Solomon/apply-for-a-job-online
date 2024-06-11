// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

type configT = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

// Your web app's Firebase configuration
const firebaseConfig: configT = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize the Firebase Auth
export const auth = getAuth(app);
const storage = getStorage(app);

// Upload File Function
export async function uploadFile(file: File): Promise<void> {
  try {
    const storageRef = ref(storage, "company_logos/" + file.name);
    const snapshot = await uploadBytes(storageRef, file);
    console.log("File uploaded successfully:", snapshot);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}
