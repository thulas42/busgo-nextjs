import { NextResponse } from 'next/server';

// Mock data for bus routes
const mockRoutes = [
  {
    id: '1',
    operator: 'Express Bus Co',
    origin: "New York",
    destination: "Boston",
    departureTime: new Date().toISOString(),
    arrivalTime: new Date(Date.now() + 14400000).toISOString(),
    duration: 180,
    price: 45.99,
    seatsAvailable: 20,
    amenities: ['WiFi', 'AC', 'Power Outlets']
  },
  {
    id: '2',
    operator: 'City Transit',
    origin: "Los Angeles",
    destination: "San Francisco",
    departureTime: new Date().toISOString(),
    arrivalTime: new Date(Date.now() + 21600000).toISOString(),
    duration: 420,
    price: 79.99,
    seatsAvailable: 15,
    amenities: ['WiFi', 'AC', 'Toilet']
  }
];

export async function POST(request) {
  try {
    const { origin, destination, date, passengers } = await request.json();
    
    // Simple filtering logic
    const filteredRoutes = mockRoutes.filter(route => {
      const originMatch = route.origin.toLowerCase().includes(origin.toLowerCase());
      const destMatch = route.destination.toLowerCase().includes(destination.toLowerCase());
      return originMatch && destMatch;
    });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return NextResponse.json(filteredRoutes);
  } catch (error) {
    console.error('Error in list-routes API:', error);
    return NextResponse.json({ error: 'Failed to fetch routes' }, { status: 500 });
  }
} 