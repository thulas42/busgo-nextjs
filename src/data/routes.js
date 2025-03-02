export const routes = [
  {
    id: '1',
    operator: 'Intercape',
    origin: "Johannesburg",
    destination: "Cape Town",
    departureTime: new Date().toISOString(),
    duration: 1080, // 18 hours
    price: 850.00,
    seatsAvailable: 24,
    amenities: ['WiFi', 'AC', 'Power Outlets', 'Reclining Seats'],
    busNumber: 'JHB-CPT-2024',
    busType: 'Sleepliner'
  },
  {
    id: '2',
    operator: 'Greyhound',
    origin: "Durban",
    destination: "Pretoria",
    departureTime: new Date().toISOString(),
    duration: 480, // 8 hours
    price: 450.00,
    seatsAvailable: 18,
    amenities: ['WiFi', 'AC', 'Toilet', 'Refreshments'],
    busNumber: 'DBN-PTA-2024',
    busType: 'Luxury Coach'
  },
  {
    id: '3',
    operator: 'Translux',
    origin: "Port Elizabeth",
    destination: "Bloemfontein",
    departureTime: new Date().toISOString(),
    duration: 420, // 7 hours
    price: 380.00,
    seatsAvailable: 22,
    amenities: ['WiFi', 'AC', 'Toilet'],
    busNumber: 'PE-BFN-2024',
    busType: 'Semi-Luxury'
  }
];

export const popularRoutes = [
  { route: 'Johannesburg - Cape Town', price: 'From R850', departures: '4+ daily departures' },
  { route: 'Durban - Johannesburg', price: 'From R400', departures: '6+ daily departures' },
  { route: 'Cape Town - Port Elizabeth', price: 'From R600', departures: '3+ daily departures' },
  { route: 'Pretoria - Polokwane', price: 'From R280', departures: '5+ daily departures' }
]; 