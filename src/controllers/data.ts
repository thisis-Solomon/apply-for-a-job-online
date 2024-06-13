import {
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../auth/firebaseConfig";
import { JobPost } from "../types/types";

// Define the collection reference
const dbCollection = collection(db, "jobs");

// Function to get all job posts
export async function getAllJobPosts() {
  try {
    const querySnapshot = await getDocs(dbCollection);
    const jobPosts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return jobPosts;
  } catch (error) {
    console.log("An error occurred when fetching job posts: ", error);
    throw error;
  }
}

// Function to read more details about a specific job post
export async function readMoreDetailsAboutAJobPost(id: string) {
  try {
    const jobPostDoc = doc(dbCollection, id);
    const jobPostSnapshot = await getDoc(jobPostDoc);
    if (jobPostSnapshot.exists()) {
      return jobPostSnapshot.data();
    } else {
      console.log("No such job post!");
      return null;
    }
  } catch (error) {
    console.log("An error occurred when fetching the job post: ", error);
    throw error;
  }
}

// Function to add a new job post
export async function addNewJobPost(inputData: JobPost) {
  try {
    const docRef = await addDoc(dbCollection, inputData);
    console.log("Job post created with ID: ", docRef.id);
  } catch (error) {
    console.log("An error occurred when creating a new job post: ", error);
    throw error;
  }
}

// Function to remove a closed job post
export async function removeClosedJobPost(id: string) {
  try {
    const jobPostDoc = doc(dbCollection, id);
    await deleteDoc(jobPostDoc);
    console.log("Job post deleted with ID: ", id);
  } catch (error) {
    console.log("An error occurred when deleting the job post: ", error);
    throw error;
  }
}
