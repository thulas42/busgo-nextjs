import { useState, useRef, useEffect } from 'react';

// Expanded list of South African cities with coordinates
const southAfricanCities = [
  // Major cities
  { name: "Johannesburg", lat: -26.2041, lng: 28.0473 },
  { name: "Cape Town", lat: -33.9249, lng: 18.4241 },
  { name: "Durban", lat: -29.8587, lng: 31.0218 },
  { name: "Pretoria", lat: -25.7461, lng: 28.1881 },
  { name: "Port Elizabeth (Gqeberha)", lat: -33.9608, lng: 25.6022 },
  { name: "Bloemfontein", lat: -29.0852, lng: 26.1596 },
  { name: "East London", lat: -33.0292, lng: 27.8546 },
  
  // Provincial capitals and major towns
  { name: "Nelspruit (Mbombela)", lat: -25.4753, lng: 30.9694 },
  { name: "Kimberley", lat: -28.7323, lng: 24.7623 },
  { name: "Polokwane", lat: -23.9045, lng: 29.4688 },
  { name: "Pietermaritzburg", lat: -29.6168, lng: 30.3928 },
  { name: "Rustenburg", lat: -25.6667, lng: 27.2422 },
  { name: "Potchefstroom", lat: -26.7167, lng: 27.1000 },
  { name: "Upington", lat: -28.4478, lng: 21.2561 },
  { name: "George", lat: -33.9636, lng: 22.4674 },
  
  // Additional cities and towns
  { name: "Stellenbosch", lat: -33.9321, lng: 18.8602 },
  { name: "Paarl", lat: -33.7274, lng: 18.9592 },
  { name: "Worcester", lat: -33.6474, lng: 19.4478 },
  { name: "Oudtshoorn", lat: -33.5884, lng: 22.2151 },
  { name: "Mossel Bay", lat: -34.1831, lng: 22.1461 },
  { name: "Knysna", lat: -34.0356, lng: 23.0485 },
  { name: "Plettenberg Bay", lat: -34.0527, lng: 23.3716 },
  { name: "Grahamstown (Makhanda)", lat: -33.3102, lng: 26.5265 },
  { name: "Port Alfred", lat: -33.5868, lng: 26.8851 },
  { name: "Umtata (Mthatha)", lat: -31.5889, lng: 28.7844 },
  { name: "Ladysmith", lat: -28.5598, lng: 29.7803 },
  { name: "Newcastle", lat: -27.7587, lng: 29.9349 },
  { name: "Richards Bay", lat: -28.7807, lng: 32.0383 },
  { name: "Empangeni", lat: -28.7448, lng: 31.8944 },
  { name: "Vryheid", lat: -27.7695, lng: 30.7917 },
  { name: "Ermelo", lat: -26.5333, lng: 29.9833 },
  { name: "Middelburg", lat: -25.7747, lng: 29.4661 },
  { name: "Witbank (Emalahleni)", lat: -25.8714, lng: 29.2332 },
  { name: "Secunda", lat: -26.5091, lng: 29.1884 },
  { name: "Standerton", lat: -26.9333, lng: 29.2333 },
  { name: "Vereeniging", lat: -26.6736, lng: 27.9319 },
  { name: "Vanderbijlpark", lat: -26.7112, lng: 27.8386 },
  { name: "Krugersdorp", lat: -26.1015, lng: 27.7696 },
  { name: "Randfontein", lat: -26.1696, lng: 27.7036 },
  { name: "Springs", lat: -26.2597, lng: 28.4353 },
  { name: "Benoni", lat: -26.1894, lng: 28.3211 },
  { name: "Boksburg", lat: -26.2123, lng: 28.2597 },
  { name: "Germiston", lat: -26.2347, lng: 28.1728 },
  { name: "Alberton", lat: -26.2708, lng: 28.1225 },
  { name: "Soweto", lat: -26.2485, lng: 27.8546 }
];

/**
 * SimpleLocationSelect Component
 * 
 * A custom location autocomplete component that doesn't rely on external APIs.
 * 
 * Technical decisions:
 * - Used a predefined list of South African cities instead of Google Maps API to avoid API costs
 * - Implemented debounce for better performance during typing
 * - Added click-outside detection for better UX
 * - Included coordinates for each location to support mapping features
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onPlaceSelect - Callback when a place is selected
 * @param {string} props.placeholder - Input placeholder text
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.initialValue - Initial input value
 * @param {string} props.label - Label text for the input
 */
export default function SimpleLocationSelect({ 
  onPlaceSelect, 
  placeholder, 
  className,
  initialValue = '',
  label
}) {
  const [query, setQuery] = useState(initialValue);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);
  
  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  
  // Filter cities based on input
  const filteredCities = query 
    ? southAfricanCities.filter(city => 
        city.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  
  const handleSelect = (city) => {
    setQuery(city.name);
    setShowSuggestions(false);
    
    onPlaceSelect({
      address: city.name,
      lat: city.lat,
      lng: city.lng
    });
  };
  
  return (
    <div className="w-full" ref={wrapperRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder={placeholder}
          className={`w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${className}`}
          autoComplete="off"
        />
        
        {showSuggestions && filteredCities.length > 0 && (
          <ul className="absolute z-10 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto">
            {filteredCities.map((city) => (
              <li
                key={city.name}
                onClick={() => handleSelect(city)}
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
              >
                {city.name}
              </li>
            ))}
          </ul>
        )}
        
        {showSuggestions && query.length > 0 && filteredCities.length === 0 && (
          <div className="absolute z-10 w-full bg-white shadow-lg rounded-md py-2 px-3 text-sm text-gray-500">
            No cities found matching "{query}"
          </div>
        )}
      </div>
    </div>
  );
} 