// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpwC7sH0fBGpJOmH__8-nCQqCO_lA-dbc",
  authDomain: "mern-book-inventory-67909.firebaseapp.com",
  projectId: "mern-book-inventory-67909",
  storageBucket: "mern-book-inventory-67909.appspot.com",
  messagingSenderId: "148408399239",
  appId: "1:148408399239:web:3ad74279c42149a7bacf22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;