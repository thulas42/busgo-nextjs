// ES Module version
import { db } from './firebase-seed.js';
import { 
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc,
  query,
  limit 
} from 'firebase/firestore';

// Import your data
import { 
  routes, 
  popularRoutes, 
  stations,
  stationAmenities,
  travelInfo,
  travelFAQs,
  helpMethods,
  helpFAQs,
  reviews,
  features,
  destinations,
  whyChooseUs,
  chatFAQs
} from '../src/data/index.js';

// Helper function to clear a collection
const clearCollection = async (collectionName) => {
  console.log(`Clearing ${collectionName} collection...`);
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, limit(500));
  const snapshot = await getDocs(q);
  
  const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
  await Promise.all(deletePromises);
  console.log(`Cleared ${snapshot.docs.length} documents from ${collectionName}`);
};

// Helper function to seed a collection
const seedCollection = async (collectionName, data) => {
  console.log(`Seeding ${collectionName} collection...`);
  const collectionRef = collection(db, collectionName);
  
  const addPromises = data.map(item => addDoc(collectionRef, item));
  await Promise.all(addPromises);
  console.log(`Added ${data.length} documents to ${collectionName}`);
};

// Main seed function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await clearCollection('routes');
    await clearCollection('popularRoutes');
    await clearCollection('stations');
    await clearCollection('stationAmenities');
    await clearCollection('travelInfo');
    await clearCollection('travelFAQs');
    await clearCollection('helpMethods');
    await clearCollection('helpFAQs');
    await clearCollection('reviews');
    await clearCollection('features');
    await clearCollection('destinations');
    await clearCollection('whyChooseUs');
    await clearCollection('chatFAQs');
    await clearCollection('deals');
    
    // Seed with new data
    await seedCollection('routes', routes);
    await seedCollection('popularRoutes', popularRoutes);
    await seedCollection('stations', stations);
    await seedCollection('stationAmenities', stationAmenities);
    await seedCollection('travelInfo', Object.values(travelInfo));
    await seedCollection('travelFAQs', travelFAQs);
    await seedCollection('helpMethods', helpMethods);
    await seedCollection('helpFAQs', helpFAQs);
    await seedCollection('reviews', reviews);
    await seedCollection('features', features);
    await seedCollection('destinations', destinations);
    await seedCollection('whyChooseUs', whyChooseUs);
    await seedCollection('chatFAQs', chatFAQs.map(faq => ({ text: faq })));
    
    // Sample deals data
    const dealsData = [
      {
        title: "Early Bird Special",
        discount: "25% OFF",
        description: "Book at least 14 days in advance and save 25% on your ticket",
        code: "EARLY25"
      },
      {
        title: "Weekend Getaway",
        discount: "20% OFF",
        description: "Travel on weekends and save 20% on selected routes",
        code: "WEEKEND20"
      },
      {
        title: "Group Discount",
        discount: "30% OFF",
        description: "Groups of 4 or more get 30% off when booking together",
        code: "GROUP30"
      },
      {
        title: "Student Special",
        discount: "15% OFF",
        description: "Valid student ID holders get 15% off any ticket",
        code: "STUDENT15"
      },
      {
        title: "Senior Citizen",
        discount: "20% OFF",
        description: "Passengers over 60 years get 20% off any route",
        code: "SENIOR20"
      },
      {
        title: "Return Trip Discount",
        discount: "10% OFF",
        description: "Book your return journey at the same time and save 10%",
        code: "RETURN10"
      }
    ];

    await seedCollection('deals', dealsData);
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Run the seed function
seedDatabase(); 