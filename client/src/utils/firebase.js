
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-47e8a.firebaseapp.com",
  projectId: "interviewiq-47e8a",
  storageBucket: "interviewiq-47e8a.firebasestorage.app",
  messagingSenderId: "725239805312",
  appId: "1:725239805312:web:2b68b20724c37d6de27d65"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}