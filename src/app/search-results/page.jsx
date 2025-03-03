"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { searchRoutes } from '../../services/routeService';

// Create a component that uses useSearchParams
function SearchResultsContent() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const date = searchParams.get('date');
  const passengers = searchParams.get('passengers');
  const returnDate = searchParams.get('returnDate');
  
  useEffect(() => {
    async function fetchResults() {
      try {
        setLoading(true);
        // Call your API to search for routes
        const routeResults = await searchRoutes(from, to, date, passengers);
        setResults(routeResults);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    }
    
    if (from && to && date) {
      fetchResults();
    }
  }, [from, to, date, passengers]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <div className="flex flex-wrap gap-4">
          <div>
            <span className="font-semibold">From:</span> {from}
          </div>
          <div>
            <span className="font-semibold">To:</span> {to}
          </div>
          <div>
            <span className="font-semibold">Date:</span> {date ? new Date(date).toLocaleDateString() : ''}
          </div>
          {returnDate && (
            <div>
              <span className="font-semibold">Return:</span> {new Date(returnDate).toLocaleDateString()}
            </div>
          )}
          <div>
            <span className="font-semibold">Passengers:</span> {passengers}
          </div>
        </div>
      </div>
      
      {results.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">No routes found for your search criteria.</p>
          <p className="mt-2">Try different locations or dates.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {results.map((route) => (
            <div key={route.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-lg font-semibold">{route.departureTime} - {route.arrivalTime}</p>
                  <p className="text-gray-600">{route.duration} • {route.stops} stops</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">R{route.price}</p>
                  <p className="text-sm text-gray-500">{route.seatsAvailable} seats left</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{route.departureTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{route.departureStation}</span>
                  </div>
                </div>
                
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Loading fallback component
function SearchResultsLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-lg text-gray-600">Loading search results...</p>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function SearchResults() {
  return (
    <Suspense fallback={<SearchResultsLoading />}>
      <SearchResultsContent />
    </Suspense>
  );
} 