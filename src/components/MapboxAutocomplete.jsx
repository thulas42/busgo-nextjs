import { useState, useEffect, useRef } from 'react';

export default function MapboxAutocomplete({ 
  onPlaceSelect, 
  placeholder, 
  className,
  initialValue = '',
  label
}) {
  const [query, setQuery] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
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
  
  // Fetch suggestions from Mapbox API
  const fetchSuggestions = async (input) => {
    if (!input || input.length < 3) {
      setSuggestions([]);
      return;
    }
    
    setLoading(true);
    try {
      const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(input)}.json?access_token=${accessToken}&country=za&types=place,locality,neighborhood&limit=5`
      );
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      setSuggestions(data.features);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };
  
  // Debounce function to limit API calls
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchSuggestions(query);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [query]);
  
  const handleSelect = (place) => {
    setQuery(place.place_name);
    setShowSuggestions(false);
    
    onPlaceSelect({
      address: place.place_name,
      lat: place.center[1],
      lng: place.center[0]
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
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${className}`}
          autoComplete="off"
        />
        
        {loading && (
          <div className="absolute right-3 top-3">
            <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
          </div>
        )}
        
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto">
            {suggestions.map((place) => (
              <li
                key={place.id}
                onClick={() => handleSelect(place)}
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
              >
                {place.place_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
} 