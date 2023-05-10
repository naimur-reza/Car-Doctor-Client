// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB1dQv8WqTNuxe9F8sbMNQdQZMMvD3e5Zo",
  authDomain: "car-doctor-man.firebaseapp.com",
  projectId: "car-doctor-man",
  storageBucket: "car-doctor-man.appspot.com",
  messagingSenderId: "272953475474",
  appId: "1:272953475474:web:0b8962ba6b26c75998414b",
  measurementId: "G-GBCJQMLDLM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
