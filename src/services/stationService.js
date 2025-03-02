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
const stationsCollection = collection(db, 'stations');
const amenitiesCollection = collection(db, 'stationAmenities');

// Get all stations
export const getAllStations = async () => {
  const snapshot = await getDocs(stationsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Get station by ID
export const getStationById = async (id) => {
  const docRef = doc(db, 'stations', id);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }
  
  return null;
};

// Search stations by name or city
export const searchStations = async (searchTerm) => {
  const snapshot = await getDocs(stationsCollection);
  const stations = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  
  // Client-side filtering (for demo purposes)
  // In a production app, you'd use Firestore queries or Algolia
  return stations.filter(station => 
    station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    station.address.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Get all station amenities
export const getStationAmenities = async () => {
  const snapshot = await getDocs(amenitiesCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Add a new station
export const addStation = async (stationData) => {
  const docRef = await addDoc(stationsCollection, {
    ...stationData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  
  return docRef.id;
};

// Update a station
export const updateStation = async (id, stationData) => {
  const docRef = doc(db, 'stations', id);
  await updateDoc(docRef, {
    ...stationData,
    updatedAt: serverTimestamp()
  });
  
  return id;
};

// Delete a station
export const deleteStation = async (id) => {
  const docRef = doc(db, 'stations', id);
  await deleteDoc(docRef);
  return id;
}; 