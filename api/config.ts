import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyD7zk1vJkpkxj2QiDPfcbarrk8erdEC6xA",
  authDomain: "force-yachts.firebaseapp.com",
  projectId: "force-yachts",
  storageBucket: "force-yachts.appspot.com",
  messagingSenderId: "98304126996",
  appId: "1:98304126996:web:eae49ecbaa8dc117c4b701",
  measurementId: "G-6MC7BK6E8N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

