// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnOZv-9B7q3dsmuPiv0zdYFa2xk6VMLxk",
  authDomain: "second-language-dictatio-50eac.firebaseapp.com",
  projectId: "second-language-dictatio-50eac",
  storageBucket: "second-language-dictatio-50eac.appspot.com",
  messagingSenderId: "538800056785",
  appId: "1:538800056785:web:68f2dff35c197e6be5d8f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;