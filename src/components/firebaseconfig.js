// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBXaSI8PEPnwp2YpggC6m7lVK6OcBhaa-c",
  authDomain: "fir-a210f.firebaseapp.com",
  databaseURL: "https://fir-a210f-default-rtdb.firebaseio.com",
  projectId: "fir-a210f",
  storageBucket: "fir-a210f.appspot.com",
  messagingSenderId: "572835236381",
  appId: "1:572835236381:web:48d0082d5e9f7e797554f4",
  measurementId: "G-FE1SE8CDYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;