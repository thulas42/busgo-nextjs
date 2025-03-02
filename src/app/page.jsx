"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Header from './components/Header';

export default function Home() {
  const [searchParams, setSearchParams] = useState({
    origin: "",
    destination: "",
    departureDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    returnDate: "",
    passengers: 1,
    searchAccommodations: false,
  });
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [routes, setRoutes] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    departureTime: "any",
    operators: [],
    amenities: [],
  });

  const mockRoutes = [
    {
      id: '1',
      operator: 'Express Bus Co',
      origin: searchParams.origin || "New York",
      destination: searchParams.destination || "Boston",
      departureTime: `${searchParams.departureDate}T08:00:00`,
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
      origin: searchParams.origin || "Los Angeles",
      destination: searchParams.destination || "San Francisco",
      departureTime: `${searchParams.departureDate}T10:30:00`,
      duration: 420,
      price: 79.99,
      seatsAvailable: 15,
      amenities: ['WiFi', 'AC', 'Toilet'],
      busNumber: 'LA-SF-2024',
      busType: 'Double Decker'
    }
  ];

  const fetchRoutes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/routes/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origin: searchParams.origin,
          destination: searchParams.destination,
          date: searchParams.departureDate,
          passengers: searchParams.passengers,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setRoutes(data.routes);
      setSearchResults(data.routes);
    } catch (err) {
      setError("Failed to load routes. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchParams.origin || !searchParams.destination) {
      setError("Please fill in origin and destination");
      return;
    }
    fetchRoutes();
  };

  const SkeletonRoute = () => (
    <div className="bg-white rounded-lg p-4 mb-4 animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
    </div>
  );

  const handleBookNow = async (routeId) => {
    try {
      const response = await fetch(`/api/book-route/${routeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passengers: searchParams.passengers,
          date: searchParams.departureDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Booking failed");
      }

      const bookingData = await response.json();
      alert(`Booking confirmed! Reference: ${bookingData.reference}`);
    } catch (error) {
      console.error("Booking error:", error);
      setError(error.message);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Schedule', path: '/schedule' },
    { name: 'Deals', path: '/deals' },
    { name: 'Stations', path: '/stations' },
    { name: 'Travel Info', path: '/travel-info' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-6 animate-float">
            Book Bus Tickets
          </h1>
          <p className="text-2xl text-white/90">
            Easily compare and book your next trip
          </p>
          <div className="mt-8 flex justify-center">
            <svg
              className="w-full h-24 text-white/10"
              viewBox="0 0 1440 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Leaving from..."
                className="w-full p-3 border rounded"
                value={searchParams.origin}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, origin: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Going to..."
                className="w-full p-3 border rounded"
                value={searchParams.destination}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    destination: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="date"
                className="w-full p-3 border rounded"
                value={searchParams.departureDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    departureDate: e.target.value,
                  })
                }
              />
              <input
                type="date"
                className="w-full p-3 border rounded"
                value={searchParams.returnDate}
                min={searchParams.departureDate}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    returnDate: e.target.value,
                  })
                }
                disabled={!searchParams.departureDate}
              />
              <select
                className="w-full p-3 border rounded"
                value={searchParams.passengers}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    passengers: parseInt(e.target.value),
                  })
                }
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num} Passenger{num !== 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={searchParams.searchAccommodations}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    searchAccommodations: e.target.checked,
                  })
                }
              />
              <label>Search accommodations</label>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
              Search Buses
            </button>
          </form>
        </div>

        {isLoading && (
          <div className="text-center py-8">
            <i className="fas fa-spinner fa-spin text-3xl text-blue-600"></i>
            <p className="mt-4 text-gray-600">Searching for routes...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
            {error}
          </div>
        )}

        {searchResults.length > 0 && (
          <div className="flex gap-6 mt-8">
            <div className="w-64 flex-shrink-0">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4">
                <h3 className="font-semibold mb-4">Filters</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Price Range</h4>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    className="w-full"
                    value={filters.priceRange[1]}
                    onChange={(e) =>
                      setFilters({ ...filters, priceRange: [0, e.target.value] })
                    }
                  />
                  <div className="text-sm text-gray-600">
                    Up to ${filters.priceRange[1]}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="space-y-4">
                {searchResults.map((route) => (
                  <div
                    key={route.id}
                    className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold">{route.operator}</h3>
                        <p className="text-gray-600">
                          {route.origin} → {route.destination}
                        </p>
                        <p className="text-sm text-gray-500">
                          Departure: {new Date(route.departureTime).toLocaleTimeString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">
                          ${route.price.toFixed(2)}
                        </p>
                        <button
                          onClick={() => handleBookNow(route.id)}
                          className="bg-green-600 text-white px-4 py-2 rounded mt-2 hover:bg-green-700"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#4F46E5] to-[#10B981] p-8 rounded-xl shadow-xl text-center text-white transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-globe text-5xl mb-6 animate-float"></i>
            <h3 className="text-2xl font-semibold mb-3">Join 75M+ travelers</h3>
            <p className="text-white/90">Booking across 85+ countries</p>
          </div>
          <div className="bg-gradient-to-br from-[#4F46E5] to-[#10B981] p-8 rounded-xl shadow-xl text-center text-white transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-headset text-5xl mb-6 animate-float"></i>
            <h3 className="text-2xl font-semibold mb-3">
              24/7 customer service
            </h3>
            <p className="text-white/90">We're here to assist you</p>
          </div>
          <div className="bg-gradient-to-br from-[#4F46E5] to-[#10B981] p-8 rounded-xl shadow-xl text-center text-white transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-undo text-5xl mb-6 animate-float"></i>
            <h3 className="text-2xl font-semibold mb-3">Cancel anytime</h3>
            <p className="text-white/90">100% refund guaranteed</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
          <div className="flex overflow-x-auto">
            {[
              "Popular routes",
              "User Reviews",
              "Why choose us",
              "Popular Routes, Destinations and Stations",
              "Other local bus companies",
            ].map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-5 text-lg whitespace-nowrap transition-all duration-300
          ${
            activeTab === index
              ? "text-[#4F46E5] border-b-2 border-[#4F46E5] bg-gradient-to-r from-[#4F46E5]/10 to-transparent"
              : "text-gray-600 hover:text-[#4F46E5] border-b-2 border-transparent"
          }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 mt-8">
          {activeTab === 0 && (
            <div className="grid grid-cols-2 gap-6">
              {['New York - Boston', 'Los Angeles - Las Vegas', 'Chicago - Detroit', 'Miami - Orlando'].map((route) => (
                <div key={route} className="p-4 border-b">
                  <h4 className="font-semibold">{route}</h4>
                  <p className="text-sm text-gray-600">From $29 • 10+ daily departures</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 1 && (
            <div className="space-y-6">
              {[
                {
                  author: "Sarah Johnson",
                  rating: 5,
                  text: "Best bus service I've ever used! Comfortable seats and punctual departures."
                },
                {
                  author: "Mike Chen",
                  rating: 4,
                  text: "Great value for money. WiFi could be better but overall excellent experience."
                }
              ].map((review, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </div>
                    <span className="ml-2 font-medium">{review.author}</span>
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { icon: 'fa-shield-alt', title: 'Safe Travel', text: '24/7 journey monitoring' },
                { icon: 'fa-ticket-alt', title: 'E-Tickets', text: 'Instant mobile tickets' },
                { icon: 'fa-headset', title: 'Support', text: 'Dedicated customer service' }
              ].map((feature) => (
                <div key={feature.title} className="p-4">
                  <i className={`fas ${feature.icon} text-3xl text-blue-600 mb-4`}></i>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-24 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-[#4F46E5] mb-8 text-center">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "New York to Boston",
                price: "From $29",
                image: "https://images.unsplash.com/photo-1543716091-a840c05249ec",
                duration: "4h"
              },
              {
                city: "Los Angeles to San Francisco",
                price: "From $49",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
                duration: "6h"
              },
              {
                city: "Chicago to Detroit",
                price: "From $39",
                image: "https://images.unsplash.com/photo-1513642691452-48d816b48c9b",
                duration: "5h"
              }
            ].map((dest) => (
              <div key={dest.city} className="relative group overflow-hidden rounded-lg h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${dest.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col">
                    <h3 className="text-2xl font-bold text-white">{dest.city}</h3>
                    <p className="text-white mt-2">{dest.price}</p>
                    <p className="text-sm text-white/90">{dest.duration} journey</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setShowChat(!showChat)}
            className="bg-[#F59E0B] text-white p-4 rounded-full shadow-lg hover:bg-[#4F46E5] transition-colors duration-300"
          >
            <i className="fas fa-comments text-2xl"></i>
          </button>
          {showChat && (
            <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl p-4">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Help Center</h3>
                <div className="space-y-2">
                  {[
                    "How to change booking?",
                    "Cancellation policy",
                    "Baggage allowance",
                    "Student discounts"
                  ].map((faq) => (
                    <div key={faq} className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                      {faq}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}