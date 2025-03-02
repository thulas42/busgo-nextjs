import { stations, stationAmenities } from '../../data';

export default function Stations() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Bus Stations</h1>
        <p className="mb-8">Find information about our bus stations across the country.</p>
        
        <div className="mb-12">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for a station..." 
              className="w-full p-4 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="absolute right-4 top-4 text-gray-400">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((station, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 text-white p-4">
                <h2 className="text-xl font-bold">{station.name}</h2>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">
                    <i className="fas fa-map-marker-alt text-red-500"></i>
                  </span>
                  {station.address}
                </p>
                <p className="text-gray-600 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <i className="fas fa-clock text-blue-500"></i>
                  </span>
                  {station.hours}
                </p>
                <h3 className="font-medium mb-2">Facilities:</h3>
                <div className="flex flex-wrap gap-2">
                  {station.facilities.map((facility, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {facility}
                    </span>
                  ))}
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">Station Amenities Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stationAmenities.map((amenity, index) => (
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