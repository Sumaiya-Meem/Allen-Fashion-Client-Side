// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZFl4UJlfotJ0W3_Ohv3Iw2tlaa7evZdE",
  authDomain: "fashion-website-39a8c.firebaseapp.com",
  projectId: "fashion-website-39a8c",
  storageBucket: "fashion-website-39a8c.appspot.com",
  messagingSenderId: "318503156550",
  appId: "1:318503156550:web:784c5f93f0ae89d26f0347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app