// CommonJS version of firebase.js
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getAuth } = require("firebase/auth");
const { getStorage } = require("firebase/storage");
const { getDatabase } = require("firebase/database");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtWxMgs6_mG9XKXDP-eDtKGIID0m_eSZs",
  authDomain: "busgo-app.firebaseapp.com",
  databaseURL: "https://busgo-app-default-rtdb.firebaseio.com",
  projectId: "busgo-app",
  storageBucket: "busgo-app.firebasestorage.app",
  messagingSenderId: "326739238382",
  appId: "1:326739238382:web:c6fcbcfe18d4a81073c2ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const rtdb = getDatabase(app);

module.exports = { app, db, auth, storage, rtdb }; 