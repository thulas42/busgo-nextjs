import { db } from '../lib/firebase';
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  serverTimestamp 
} from 'firebase/firestore';

// Collection references
const travelInfoCollection = collection(db, 'travelInfo');
const travelFAQsCollection = collection(db, 'travelFAQs');

// Get all travel info
export const getAllTravelInfo = async () => {
  const snapshot = await getDocs(travelInfoCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Get travel info by ID
export const getTravelInfoById = async (id) => {
  const docRef = doc(db, 'travelInfo', id);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }
  
  return null;
};

// Get all travel FAQs
export const getTravelFAQs = async () => {
  const snapshot = await getDocs(travelFAQsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Add a new travel info item
export const addTravelInfo = async (infoData) => {
  const docRef = await addDoc(travelInfoCollection, {
    ...infoData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  
  return docRef.id;
};

// Update travel info
export const updateTravelInfo = async (id, infoData) => {
  const docRef = doc(db, 'travelInfo', id);
  await updateDoc(docRef, {
    ...infoData,
    updatedAt: serverTimestamp()
  });
  
  return id;
};

// Delete travel info
export const deleteTravelInfo = async (id) => {
  const docRef = doc(db, 'travelInfo', id);
  await deleteDoc(docRef);
  return id;
};

// Add a new travel FAQ
export const addTravelFAQ = async (faqData) => {
  const docRef = await addDoc(travelFAQsCollection, {
    ...faqData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  
  return docRef.id;
};

// Update travel FAQ
export const updateTravelFAQ = async (id, faqData) => {
  const docRef = doc(db, 'travelFAQs', id);
  await updateDoc(docRef, {
    ...faqData,
    updatedAt: serverTimestamp()
  });
  
  return id;
};

// Delete travel FAQ
export const deleteTravelFAQ = async (id) => {
  const docRef = doc(db, 'travelFAQs', id);
  await deleteDoc(docRef);
  return id;
}; 