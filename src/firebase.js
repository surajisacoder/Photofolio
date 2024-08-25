// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeYdWnVGztccrjz5xvlE2-jAvOKcr5Ge8",
  authDomain: "photofolio-80725.firebaseapp.com",
  projectId: "photofolio-80725",
  storageBucket: "photofolio-80725.appspot.com",
  messagingSenderId: "271267355739",
  appId: "1:271267355739:web:9c772dab5a355cd789737e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
