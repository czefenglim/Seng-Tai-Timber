// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5PvVCIjA3cY_LS6MiCbRiwezrEua30qI",
  authDomain: "seng-tai-web.firebaseapp.com",
  projectId: "seng-tai-web",
  storageBucket: "seng-tai-web.firebasestorage.app",
  messagingSenderId: "355305177623",
  appId: "1:355305177623:web:8e59a25efaefa40baad252",
  measurementId: "G-X718NFMJJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export db for use in other parts of the app
export { db };