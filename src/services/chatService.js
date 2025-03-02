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
const chatFAQsCollection = collection(db, 'chatFAQs');

// Get all chat FAQs
export const getChatFAQs = async () => {
  const snapshot = await getDocs(chatFAQsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Get chat FAQ by ID
export const getChatFAQById = async (id) => {
  const docRef = doc(db, 'chatFAQs', id);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }
  
  return null;
};

// Add a new chat FAQ
export const addChatFAQ = async (faqData) => {
  const docRef = await addDoc(chatFAQsCollection, {
    ...faqData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  
  return docRef.id;
};

// Update a chat FAQ
export const updateChatFAQ = async (id, faqData) => {
  const docRef = doc(db, 'chatFAQs', id);
  await updateDoc(docRef, {
    ...faqData,
    updatedAt: serverTimestamp()
  });
  
  return id;
};

// Delete a chat FAQ
export const deleteChatFAQ = async (id) => {
  const docRef = doc(db, 'chatFAQs', id);
  await deleteDoc(docRef);
  return id;
}; 