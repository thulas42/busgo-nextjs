"use client";
import { useState, useEffect } from 'react';
import { getAllTravelInfo, getTravelFAQs } from '../../services/travelInfoService';

export default function TravelInfo() {
  const [travelInfo, setTravelInfo] = useState([]);
  const [travelFAQs, setTravelFAQs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [infoData, faqsData] = await Promise.all([
          getAllTravelInfo(),
          getTravelFAQs()
        ]);
        
        setTravelInfo(infoData);
        setTravelFAQs(faqsData);
      } catch (err) {
        console.error('Error fetching travel information:', err);
        setError('Failed to load travel information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper function to render standard info cards
  const renderInfoCard = (info) => {
    return (
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <i className={`fas ${info.icon} text-blue-700`}></i>
          </div>
          <h2 className="text-xl font-semibold text-blue-700">
            {info.title}
          </h2>
        </div>
        <ul className="space-y-3">
          {info.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
          <p className="text-xl">Loading travel information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
          <p className="text-xl text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Travel Information</h1>
        <p className="mb-8">Everything you need to know for a smooth journey with BusGo.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {travelInfo.map((info, index) => (
            <div key={index}>
              {renderInfoCard(info)}
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#4F46E5]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {travelFAQs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 