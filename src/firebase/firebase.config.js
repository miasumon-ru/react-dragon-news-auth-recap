
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7WcX04xxr9g31TAQ99Ne2xGkWGyA0pss",
  authDomain: "react-dragon-news-auth-3cc55.firebaseapp.com",
  projectId: "react-dragon-news-auth-3cc55",
  storageBucket: "react-dragon-news-auth-3cc55.appspot.com",
  messagingSenderId: "1021156943150",
  appId: "1:1021156943150:web:4e76c1d8d4a523ea7d06bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;