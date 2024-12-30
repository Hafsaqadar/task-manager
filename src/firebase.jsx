// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGQqke6WofY8t-y1_6QmrR0eGMEG672oI",
  authDomain: "registratio-n.firebaseapp.com",
  projectId: "registratio-n",
  storageBucket: "registratio-n.firebasestorage.app",
  messagingSenderId: "292376312798",
  appId: "1:292376312798:web:f6062f63f23333dd5a3b4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;