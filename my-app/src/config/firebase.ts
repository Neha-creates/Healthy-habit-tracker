import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuJjoqPslskfdCKvZEoDl4xm5i_g4-TJ4",
  authDomain: "health-tracker-f33d6.firebaseapp.com",
  projectId: "health-tracker-f33d6",
  databaseURL: "https://health-tracker-f33d6-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "health-tracker-f33d6.firebasestorage.app",
  messagingSenderId: "522964733776",
  appId: "1:522964733776:web:4e8dd3cdffc266cd4fa655",
  measurementId: "G-F3MTT1RFR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
