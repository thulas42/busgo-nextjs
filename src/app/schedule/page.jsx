"use client";
import { useState, useEffect } from 'react';
import { getPopularRoutes } from '../../services/routeService';

export default function Schedule() {
  const [popularRoutes, setPopularRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        setLoading(true);
        const routes = await getPopularRoutes();
        setPopularRoutes(routes);
      } catch (err) {
        console.error('Error fetching routes:', err);
        setError('Failed to load schedule information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8">
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 text-center">
          <p className="text-xl">Loading schedule information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8">
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 text-center">
          <p className="text-xl text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Bus Schedule</h1>
        <p className="mb-4">Browse our comprehensive bus schedule to find the perfect departure time for your journey.</p>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularRoutes.map((item, index) => (
              <div key={index} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium">{item.route}</h3>
                <p className="text-sm text-gray-600">{item.departures}</p>
                <p className="text-sm font-medium text-blue-600 mt-1">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 