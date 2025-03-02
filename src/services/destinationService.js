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
const destinationsCollection = collection(db, 'destinations');

// Get all destinations
export const getDestinations = async () => {
  const snapshot = await getDocs(destinationsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Get destination by ID
export const getDestinationById = async (id) => {
  const docRef = doc(db, 'destinations', id);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }
  
  return null;
};

// Add a new destination
export const addDestination = async (destinationData) => {
  const docRef = await addDoc(destinationsCollection, {
    ...destinationData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  
  return docRef.id;
};

// Update a destination
export const updateDestination = async (id, destinationData) => {
  const docRef = doc(db, 'destinations', id);
  await updateDoc(docRef, {
    ...destinationData,
    updatedAt: serverTimestamp()
  });
  
  return id;
};

// Delete a destination
export const deleteDestination = async (id) => {
  const docRef = doc(db, 'destinations', id);
  await deleteDoc(docRef);
  return id;
}; 