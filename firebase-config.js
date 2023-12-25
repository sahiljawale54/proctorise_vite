// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt9wPtbItv8HDtmVYX0NmKbTJxoWAh3vo",
  authDomain: "beproject-fce8d.firebaseapp.com",
  projectId: "beproject-fce8d",
  storageBucket: "beproject-fce8d.appspot.com",
  messagingSenderId: "474026425458",
  appId: "1:474026425458:web:f3c7b5b56a32f1a4cf16eb",
  measurementId: "G-7GJ0JTG38T",
};

const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app);
const txtDB = getFirestore(app);

export { imgDB, txtDB };