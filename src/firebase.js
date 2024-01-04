
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7B_yVnIyOyi67PYxL3zYrRitjSJcVgS4",
  authDomain: "cart-bd18e.firebaseapp.com",
  projectId: "cart-bd18e",
  storageBucket: "cart-bd18e.appspot.com",
  messagingSenderId: "946141876352",
  appId: "1:946141876352:web:7f1250b7ee377640505665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};