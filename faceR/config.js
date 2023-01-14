import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBbC1mlnZQol6Iqhewi_vr731JqX-8ejK4",
  authDomain: "facer-67b46.firebaseapp.com",
  projectId: "facer-67b46",
  storageBucket: "facer-67b46.appspot.com",
  messagingSenderId: "1059662869767",
  appId: "1:1059662869767:web:721a07fe011e1577a081a2",
  measurementId: "G-HY8E2WVCKW"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);