// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.local.VITE_APIKEY,
  authDomain: import.meta.env.local.VITE_AUTHDOMAIN,
  projectId: import.meta.env.local.VITE_PROJECTID,
  storageBucket: import.meta.env.local.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.local.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.local.VITE_APPID,
  measurementId: import.meta.env.local.VITE_MEASUREMENTID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
