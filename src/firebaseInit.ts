import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAch7AGFuD3ucIkwj1vFBffNzwhDx9UBug",
  authDomain: "bds-app-b95fc.firebaseapp.com",
  projectId: "bds-app-b95fc",
  storageBucket: "bds-app-b95fc.appspot.com",
  messagingSenderId: "279105025720",
  appId: "1:279105025720:web:8eabea886b6315f344a64d",
  measurementId: "G-ERS12QYY1Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
