import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { origin, destination, date, passengers } = await request.json();
    
    // Mock data
    const mockRoutes = [
      {
        id: '1',
        operator: 'Express Bus Co',
        origin: origin || "New York",
        destination: destination || "Boston",
        departureTime: `${date}T08:00:00`,
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
        origin: origin || "Los Angeles",
        destination: destination || "San Francisco",
        departureTime: `${date}T10:30:00`,
        duration: 420,
        price: 79.99,
        seatsAvailable: 15,
        amenities: ['WiFi', 'AC', 'Toilet'],
        busNumber: 'LA-SF-2024',
        busType: 'Double Decker'
      }
    ];
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return NextResponse.json({ routes: mockRoutes });
  } catch (error) {
    console.error('Error in list-routes API:', error);
    return NextResponse.json({ error: 'Failed to fetch routes' }, { status: 500 });
  }
} 