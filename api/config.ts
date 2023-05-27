import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: 'AIzaSyAxYihqOyosW24I5M5TuegNNjj5rKZlsEc',
  authDomain: 'force-yatchs.firebaseapp.com',
  projectId: 'force-yatchs',
  storageBucket: 'force-yatchs.appspot.com',
  messagingSenderId: '58383611747',
  appId: '1:58383611747:web:d211d499a2232fa513c556'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

