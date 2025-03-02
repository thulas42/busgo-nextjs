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
const featuresCollection = collection(db, 'features');

// Get all features
export const getFeatures = async () => {
  const snapshot = await getDocs(featuresCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Get feature by ID
export const getFeatureById = async (id) => {
  const docRef = doc(db, 'features', id);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }
  
  return null;
};

// Add a new feature
export const addFeature = async (featureData) => {
  const docRef = await addDoc(featuresCollection, {
    ...featureData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  
  return docRef.id;
};

// Update a feature
export const updateFeature = async (id, featureData) => {
  const docRef = doc(db, 'features', id);
  await updateDoc(docRef, {
    ...featureData,
    updatedAt: serverTimestamp()
  });
  
  return id;
};

// Delete a feature
export const deleteFeature = async (id) => {
  const docRef = doc(db, 'features', id);
  await deleteDoc(docRef);
  return id;
}; 