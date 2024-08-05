// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw10MyD5mUm--rP4IdjfU2UqMZm8A39Fc",
  authDomain: "pantry-management-6a4c1.firebaseapp.com",
  projectId: "pantry-management-6a4c1",
  storageBucket: "pantry-management-6a4c1.appspot.com",
  messagingSenderId: "491037247780",
  appId: "1:491037247780:web:c18550ec16c94f16820bb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export Firestore instance
