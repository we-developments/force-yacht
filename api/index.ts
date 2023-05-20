import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
