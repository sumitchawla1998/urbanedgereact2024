import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALV_PyiYf4rGqnX0I0t-M4Em5tOJk3pmI",
  authDomain: "urbanedge-5ae17.firebaseapp.com",
  projectId: "urbanedge-5ae17",
  storageBucket: "urbanedge-5ae17.appspot.com",
  messagingSenderId: "957790892627",
  appId: "1:957790892627:web:4ea77a781e4ca59103cca6"
};


const app = initializeApp(firebaseConfig);

export let db = getFirestore()
export let auth = getAuth()