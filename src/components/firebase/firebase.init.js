// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/***firebase auth from firebase documentation */
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYRCrPxRKmE5uIcG03Fp3MKCoxtYJBizI",
  authDomain: "coffee-store-app-1e8a6.firebaseapp.com",
  projectId: "coffee-store-app-1e8a6",
  storageBucket: "coffee-store-app-1e8a6.firebasestorage.app",
  messagingSenderId: "642198527623",
  appId: "1:642198527623:web:db2a2fb8419faa59b9e222"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service, NOTE: MUST export
export const auth = getAuth(app);