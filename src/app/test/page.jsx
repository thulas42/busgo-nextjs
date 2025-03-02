"use client";
import { useState } from 'react';
import SimpleLocationSelect from '../../components/SimpleLocationSelect';

export default function TestPage() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const handleLocationSelect = (place) => {
    setSelectedLocation(place);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Test SimpleLocationSelect</h1>
      
      <div className="mb-6">
        <SimpleLocationSelect
          onPlaceSelect={handleLocationSelect}
          placeholder="Search for a location..."
          label="Location"
        />
      </div>
      
      {selectedLocation && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold">Selected Location:</h2>
          <pre>{JSON.stringify(selectedLocation, null, 2)}</pre>
        </div>
      )}
    </div>
  );
} 