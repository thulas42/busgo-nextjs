import { db } from '../lib/firebase';
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  serverTimestamp 
} from 'firebase/firestore';

// Collection reference
const bookingsCollection = collection(db, 'bookings');

// Create a new booking
export const createBooking = async (bookingData) => {
  // Generate a random reference number
  const reference = Math.random().toString(36).substring(2, 10).toUpperCase();
  
  const docRef = await addDoc(bookingsCollection, {
    ...bookingData,
    reference,
    status: 'confirmed',
    createdAt: serverTimestamp()
  });
  
  return {
    id: docRef.id,
    reference
  };
};

// Get booking by ID
export const getBookingById = async (id) => {
  const docRef = doc(db, 'bookings', id);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }
  
  return null;
};

// Get bookings by user ID
export const getUserBookings = async (userId) => {
  const q = query(
    bookingsCollection,
    where('userId', '==', userId)
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Update booking status
export const updateBookingStatus = async (id, status) => {
  const docRef = doc(db, 'bookings', id);
  await updateDoc(docRef, {
    status,
    updatedAt: serverTimestamp()
  });
  
  return id;
};

// Cancel booking
export const cancelBooking = async (id) => {
  return updateBookingStatus(id, 'cancelled');
}; 