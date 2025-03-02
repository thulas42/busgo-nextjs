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

// Collection reference
const dealsCollection = collection(db, 'deals');

// Get all deals
export const getAllDeals = async () => {
  const snapshot = await getDocs(dealsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Get deal by ID
export const getDealById = async (id) => {
  const docRef = doc(db, 'deals', id);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }
  
  return null;
};

// Add a new deal
export const addDeal = async (dealData) => {
  const docRef = await addDoc(dealsCollection, {
    ...dealData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  
  return docRef.id;
};

// Update a deal
export const updateDeal = async (id, dealData) => {
  const docRef = doc(db, 'deals', id);
  await updateDoc(docRef, {
    ...dealData,
    updatedAt: serverTimestamp()
  });
  
  return id;
};

// Delete a deal
export const deleteDeal = async (id) => {
  const docRef = doc(db, 'deals', id);
  await deleteDoc(docRef);
  return id;
}; 