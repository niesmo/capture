// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBklEYRz6y8KOP7zVKNxV-NGjBjxFv3h9Q",
  authDomain: "capture-11a64.firebaseapp.com",
  projectId: "capture-11a64",
  storageBucket: "capture-11a64.appspot.com",
  messagingSenderId: "43358628901",
  appId: "1:43358628901:web:337e75ff00fb2a4ae023cc",
  measurementId: "G-222WMHTVWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);