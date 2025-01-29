// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate25.firebaseapp.com",
  projectId: "mern-estate25",
  storageBucket: "mern-estate25.firebasestorage.app",
  messagingSenderId: "452754699596",
  appId: "1:452754699596:web:d5ba28db71548faa1c4be9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);