// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhwYET7DOnalRhZ3pZTZmJJSWcXW3NTSI",
  authDomain: "counselling-companion.firebaseapp.com",
  projectId: "counselling-companion",
  storageBucket: "counselling-companion.firebasestorage.app",
  messagingSenderId: "421444964756",
  appId: "1:421444964756:web:d72e1be64db3320ca1ff81",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
