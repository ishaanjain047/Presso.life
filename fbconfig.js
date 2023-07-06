import { initializeApp, getApp } from "firebase/app";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgzOERA1J6vd3Py-6w0nzBoCKPSid0_XU",
  authDomain: "presso-num-data.firebaseapp.com",
  projectId: "presso-num-data",
  storageBucket: "presso-num-data.appspot.com",
  messagingSenderId: "662907095775",
  appId: "1:662907095775:web:5485984c051537e99a776a",
  measurementId: "G-6MCB8V4GK1",
};

let MyApp;

try {
  if (firebaseConfig.apiKey) {
    MyApp = initializeApp(firebaseConfig);
  }
} catch (err) {
  // ignore app already initialized error on snack
}

const db = getFirestore(MyApp);
console.log(db);
export { db, MyApp };
