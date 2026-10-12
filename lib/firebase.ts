
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0ukR_S4P_-c_qLSuzRp7NOSaZI5LoGMw",
  authDomain: "cafec-2d3a5.firebaseapp.com",
  projectId: "cafec-2d3a5",
  storageBucket: "cafec-2d3a5.firebasestorage.app",
  messagingSenderId: "520967704849",
  appId: "1:520967704849:web:ffb37a2bac7a8b0d31fcb0"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);