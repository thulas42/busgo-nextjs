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
const whyChooseUsCollection = collection(db, 'whyChooseUs');

// Get all whyChooseUs items
export const getWhyChooseUs = async () => {
  const snapshot = await getDocs(whyChooseUsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Get whyChooseUs item by ID
export const getWhyChooseUsById = async (id) => {
  const docRef = doc(db, 'whyChooseUs', id);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }
  
  return null;
};

// Add a new whyChooseUs item
export const addWhyChooseUs = async (itemData) => {
  const docRef = await addDoc(whyChooseUsCollection, {
    ...itemData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  
  return docRef.id;
};

// Update a whyChooseUs item
export const updateWhyChooseUs = async (id, itemData) => {
  const docRef = doc(db, 'whyChooseUs', id);
  await updateDoc(docRef, {
    ...itemData,
    updatedAt: serverTimestamp()
  });
  
  return id;
};

// Delete a whyChooseUs item
export const deleteWhyChooseUs = async (id) => {
  const docRef = doc(db, 'whyChooseUs', id);
  await deleteDoc(docRef);
  return id;
}; 