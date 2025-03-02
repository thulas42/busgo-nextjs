// Firebase configuration for seed script
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Hardcode the Firebase configuration for the seed script
const firebaseConfig = {
  apiKey: "AIzaSyCtWxMgs6_mG9XKXDP-eDtKGIID0m_eSZs",
  authDomain: "busgo-app.firebaseapp.com",
  databaseURL: "https://busgo-app-default-rtdb.firebaseio.com",
  projectId: "busgo-app",
  storageBucket: "busgo-app.firebasestorage.app",
  messagingSenderId: "326739238382",
  appId: "1:326739238382:web:c6fcbcfe18d4a81073c2ff"
};

// Initialize Firebase (only Firestore is needed for seeding)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 