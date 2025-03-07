"use client";
import { useState, useEffect } from 'react';
import { getAllStations, getStationAmenities } from '../../services/stationService';

export default function Stations() {
  const [stations, setStations] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [stationsData, amenitiesData] = await Promise.all([
          getAllStations(),
          getStationAmenities()
        ]);
        
        setStations(stationsData);
        setAmenities(amenitiesData);
      } catch (err) {
        console.error('Error fetching station data:', err);
        setError('Failed to load station information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredStations = searchTerm 
    ? stations.filter(station => 
        station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        station.address.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : stations;

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
          <p className="text-xl">Loading station information...</p>
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
        <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Bus Stations</h1>
        <p className="mb-8">Find information about our bus stations across South Africa.</p>
        
        <div className="mb-12">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for a station..." 
              className="w-full p-4 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-4 top-4 text-gray-400">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredStations.map((station, index) => (
            <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 text-white p-4">
                <h2 className="text-xl font-semibold">{station.name}</h2>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">{station.address}</p>
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Facilities</h3>
                  <div className="flex flex-wrap gap-2">
                    {station.facilities.map((facility, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <i className="far fa-clock mr-2"></i>
                  Hours: {station.hours}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#4F46E5] mb-6">Station Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className={`fas ${amenity.icon} text-blue-600`}></i>
                </div>
                <div>
                  <h3 className="font-medium">{amenity.name}</h3>
                  <p className="text-sm text-gray-600">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 