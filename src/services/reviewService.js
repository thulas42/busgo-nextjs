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
const reviewsCollection = collection(db, 'reviews');

// Get all reviews
export const getReviews = async () => {
  const snapshot = await getDocs(reviewsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Get review by ID
export const getReviewById = async (id) => {
  const docRef = doc(db, 'reviews', id);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }
  
  return null;
};

// Add a new review
export const addReview = async (reviewData) => {
  const docRef = await addDoc(reviewsCollection, {
    ...reviewData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  
  return docRef.id;
};

// Update a review
export const updateReview = async (id, reviewData) => {
  const docRef = doc(db, 'reviews', id);
  await updateDoc(docRef, {
    ...reviewData,
    updatedAt: serverTimestamp()
  });
  
  return id;
};

// Delete a review
export const deleteReview = async (id) => {
  const docRef = doc(db, 'reviews', id);
  await deleteDoc(docRef);
  return id;
}; 