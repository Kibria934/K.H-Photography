// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbYf_KVc0m5hRd6VtckwXxIL2Wi0g0q3s",
  authDomain: "k-h-photography.firebaseapp.com",
  projectId: "k-h-photography",
  storageBucket: "k-h-photography.appspot.com",
  messagingSenderId: "992253089105",
  appId: "1:992253089105:web:b45e5c2cc7ebaf3dc2ef70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
