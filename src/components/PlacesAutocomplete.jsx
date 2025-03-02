import { useState, useEffect } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@headlessui/react';

export default function PlacesAutocomplete({ 
  onPlaceSelect, 
  placeholder, 
  className,
  initialValue = '',
  label
}) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  
  useEffect(() => {
    // Check if the Google Maps script is already loaded
    if (window.google && window.google.maps) {
      setScriptLoaded(true);
      return;
    }
    
    // Load the Google Maps script if not already loaded
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    
    googleMapScript.addEventListener('load', () => {
      setScriptLoaded(true);
    });
    
    document.body.appendChild(googleMapScript);
    
    return () => {
      // Clean up
      document.body.removeChild(googleMapScript);
    };
  }, []);
  
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
      componentRestrictions: { country: 'za' }, // Restrict to South Africa
      types: ['(cities)'], // Only show cities
    },
    debounce: 300,
    defaultValue: initialValue,
  });
  
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      onPlaceSelect({ address, lat, lng });
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  
  if (!scriptLoaded) return <div>Loading...</div>;
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <Combobox onChange={handleSelect}>
        <div className="relative">
          <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className={`w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${className}`}
            placeholder={placeholder}
            autoComplete="off"
          />
          <ComboboxPopover className="absolute z-10 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto">
            <ComboboxList>
              {status === "OK" &&
                data.map(({ place_id, description }) => (
                  <ComboboxOption
                    key={place_id}
                    value={description}
                    className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
                  >
                    {description}
                  </ComboboxOption>
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </div>
      </Combobox>
    </div>
  );
} 