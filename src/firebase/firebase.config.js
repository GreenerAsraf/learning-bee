// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8SF-UNzYOcmq7_Y3zjqCu4-kwnd5X564",
  authDomain: "programming-bee.firebaseapp.com",
  projectId: "programming-bee",
  storageBucket: "programming-bee.appspot.com",
  messagingSenderId: "91225304661",
  appId: "1:91225304661:web:0896d2d081249d141c2edc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;