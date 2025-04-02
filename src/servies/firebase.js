
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC5bJUoWvdbWENTZvwEtR-D5GlIkpKMd8M",
  authDomain: "rescuepaws-75ae1.firebaseapp.com",
  projectId: "rescuepaws-75ae1",
  storageBucket: "rescuepaws-75ae1.firebasestorage.app",
  messagingSenderId: "966119021534",
  appId: "1:966119021534:web:20a83fd0689a07743cdb4f",
  measurementId: "G-P0XNQF944G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);