export const routes = [
  {
    id: '1',
    operator: 'Express Bus Co',
    origin: "New York",
    destination: "Boston",
    departureTime: new Date().toISOString(),
    duration: 180,
    price: 45.99,
    seatsAvailable: 20,
    amenities: ['WiFi', 'AC', 'Power Outlets'],
    busNumber: 'NYC-BOS-2024',
    busType: 'Luxury Coach'
  },
  {
    id: '2',
    operator: 'City Transit',
    origin: "Los Angeles",
    destination: "San Francisco",
    departureTime: new Date().toISOString(),
    duration: 420,
    price: 79.99,
    seatsAvailable: 15,
    amenities: ['WiFi', 'AC', 'Toilet'],
    busNumber: 'LA-SF-2024',
    busType: 'Double Decker'
  }
];

export const popularRoutes = [
  { route: 'New York - Boston', price: 'From $29', departures: '10+ daily departures' },
  { route: 'Los Angeles - Las Vegas', price: 'From $39', departures: '8+ daily departures' },
  { route: 'Chicago - Detroit', price: 'From $35', departures: '6+ daily departures' },
  { route: 'Miami - Orlando', price: 'From $25', departures: '12+ daily departures' }
]; 