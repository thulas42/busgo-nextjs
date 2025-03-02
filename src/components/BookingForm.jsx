"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SimpleLocationSelect from './SimpleLocationSelect';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    departureDate: new Date(),
    returnDate: null,
    passengers: 1,
    isRoundTrip: false,
  });
  
  const [departureCoords, setDepartureCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  
  const handleDepartureSelect = (place) => {
    setFormData({
      ...formData,
      departure: place.address,
    });
    setDepartureCoords({ lat: place.lat, lng: place.lng });
  };
  
  const handleDestinationSelect = (place) => {
    setFormData({
      ...formData,
      destination: place.address,
    });
    setDestinationCoords({ lat: place.lat, lng: place.lng });
  };
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct query parameters
    const params = new URLSearchParams({
      from: formData.departure,
      to: formData.destination,
      date: formData.departureDate.toISOString(),
      passengers: formData.passengers,
    });
    
    if (formData.isRoundTrip && formData.returnDate) {
      params.append('returnDate', formData.returnDate.toISOString());
    }
    
    // Navigate to search results page
    router.push(`/search-results?${params.toString()}`);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Your Bus</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <SimpleLocationSelect
            onPlaceSelect={handleDepartureSelect}
            placeholder="From where?"
            label="Departure"
            initialValue={formData.departure}
          />
          
          <SimpleLocationSelect
            onPlaceSelect={handleDestinationSelect}
            placeholder="To where?"
            label="Destination"
            initialValue={formData.destination}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Departure Date
            </label>
            <DatePicker
              selected={formData.departureDate}
              onChange={(date) => setFormData({...formData, departureDate: date})}
              className="w-full p-2 border border-gray-300 rounded-md"
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          
          {formData.isRoundTrip && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Return Date
              </label>
              <DatePicker
                selected={formData.returnDate}
                onChange={(date) => setFormData({...formData, returnDate: date})}
                className="w-full p-2 border border-gray-300 rounded-md"
                minDate={formData.departureDate}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Passengers
            </label>
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'passenger' : 'passengers'}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center h-full pt-6">
            <input
              type="checkbox"
              id="isRoundTrip"
              name="isRoundTrip"
              checked={formData.isRoundTrip}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="isRoundTrip" className="ml-2 block text-sm text-gray-700">
              Round Trip
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Search Buses
        </button>
      </form>
    </div>
  );
} 