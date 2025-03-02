"use client";
import { useState, useEffect } from 'react';
import { getAllDeals } from '../../services/dealService';

export default function Deals() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        setLoading(true);
        const dealsData = await getAllDeals();
        setDeals(dealsData);
      } catch (err) {
        console.error('Error fetching deals:', err);
        setError('Failed to load special deals. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8">
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 text-center">
          <p className="text-xl">Loading special deals...</p>
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
        <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Special Deals</h1>
        <p className="mb-8">Take advantage of our limited-time offers and save on your next journey!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 text-white p-4">
                <h2 className="text-xl font-bold">{deal.title}</h2>
                <p className="text-2xl font-bold mt-2">{deal.discount}</p>
              </div>
              <div className="p-4">
                <p className="mb-4">{deal.description}</p>
                <div className="bg-gray-100 p-2 rounded text-center">
                  <span className="text-sm text-gray-600">Use code:</span>
                  <span className="font-bold ml-2">{deal.code}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 