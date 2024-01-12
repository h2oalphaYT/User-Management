// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-app-fb3fa.firebaseapp.com",
  projectId: "auth-app-fb3fa",
  storageBucket: "auth-app-fb3fa.appspot.com",
  messagingSenderId: "347290046755",
  appId: "1:347290046755:web:17e8cf1733a20217977c96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);