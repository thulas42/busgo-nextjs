// Firebase Admin SDK for seed script (bypasses security rules)
import admin from 'firebase-admin';
import { readFileSync } from 'fs';

// Load the service account key JSON file
const serviceAccount = JSON.parse(
  readFileSync('./service-account-key.json', 'utf8')
);

// Initialize Firebase Admin with the service account
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export { db }; 