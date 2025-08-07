// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuAfKFNt331_KdfB21dnZRqh7PCINUWQE",
  authDomain: "restaurantfriends-cf79a.firebaseapp.com",
  projectId: "restaurantfriends-cf79a",
  storageBucket: "restaurantfriends-cf79a.firebasestorage.app",
  messagingSenderId: "127641245441",
  appId: "1:127641245441:web:e8f5605852df473e8dad00",
  measurementId: "G-GH262VSY6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
