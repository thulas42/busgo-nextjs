import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
  try {
    const { id } = params;
    const { passengers, date } = await request.json();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate a random reference number
    const reference = Math.random().toString(36).substring(2, 10).toUpperCase();
    
    return NextResponse.json({
      id: Math.random().toString(36).substring(2, 10),
      routeId: id,
      passengers,
      date,
      reference,
      status: 'confirmed'
    });
  } catch (error) {
    console.error('Error in book-route API:', error);
    return NextResponse.json({ error: 'Failed to book route' }, { status: 500 });
  }
} 