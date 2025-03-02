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

// Collection references
const routesCollection = collection(db, 'routes');
const popularRoutesCollection = collection(db, 'popularRoutes');

// Get all routes
export const getAllRoutes = async () => {
  const snapshot = await getDocs(routesCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Get route by ID
export const getRouteById = async (id) => {
  const docRef = doc(db, 'routes', id);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }
  
  return null;
};

// Search routes by origin and destination
export const searchRoutes = async (origin, destination, date) => {
  const q = query(
    routesCollection,
    where('origin', '==', origin),
    where('destination', '==', destination)
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Get popular routes
export const getPopularRoutes = async () => {
  const snapshot = await getDocs(popularRoutesCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Add a new route
export const addRoute = async (routeData) => {
  const docRef = await addDoc(routesCollection, {
    ...routeData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  
  return docRef.id;
};

// Update a route
export const updateRoute = async (id, routeData) => {
  const docRef = doc(db, 'routes', id);
  await updateDoc(docRef, {
    ...routeData,
    updatedAt: serverTimestamp()
  });
  
  return id;
};

// Delete a route
export const deleteRoute = async (id) => {
  const docRef = doc(db, 'routes', id);
  await deleteDoc(docRef);
  return id;
}; 