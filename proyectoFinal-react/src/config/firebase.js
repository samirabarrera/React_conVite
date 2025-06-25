// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFNmkIyKaGApzUPTsCgzzv9bhj9vPOZBg",
  authDomain: "proyectotienda2025-2447b.firebaseapp.com",
  projectId: "proyectotienda2025-2447b",
  storageBucket: "proyectotienda2025-2447b.firebasestorage.app",
  messagingSenderId: "954392918816",
  appId: "1:954392918816:web:2f410c91b3b942ae7b7545",
  measurementId: "G-FSKLM9EF87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)