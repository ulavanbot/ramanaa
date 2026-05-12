// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz-Se6FAY2q0vv92mvoyCfSmhPGzJg7Oc",
  authDomain: "ramanaa-de432.firebaseapp.com",
  projectId: "ramanaa-de432",
  storageBucket: "ramanaa-de432.firebasestorage.app",
  messagingSenderId: "693947373642",
  appId: "1:693947373642:web:3178828f7798597cb7aeb3",
  measurementId: "G-KZ5QGCQ942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export auth and db for the app to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const auth = getAuth(app);
export const db = getFirestore(app);
