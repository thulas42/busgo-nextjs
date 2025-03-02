export default function Stations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
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
          {[
            {
              name: "New York Central Bus Terminal",
              address: "625 8th Avenue, New York, NY 10018",
              facilities: ["Waiting Area", "Restrooms", "Food Court", "Luggage Storage", "Wi-Fi"],
              hours: "24/7"
            },
            {
              name: "Boston South Station",
              address: "700 Atlantic Ave, Boston, MA 02110",
              facilities: ["Waiting Area", "Restrooms", "Cafes", "ATM", "Wi-Fi"],
              hours: "5:00 AM - 1:00 AM"
            },
            {
              name: "Los Angeles Bus Center",
              address: "1716 E 7th St, Los Angeles, CA 90021",
              facilities: ["Waiting Area", "Restrooms", "Vending Machines", "Wi-Fi"],
              hours: "6:00 AM - 11:00 PM"
            },
            {
              name: "Chicago Bus Depot",
              address: "630 W Harrison St, Chicago, IL 60607",
              facilities: ["Waiting Area", "Restrooms", "Food Court", "Luggage Storage", "Wi-Fi"],
              hours: "24/7"
            },
            {
              name: "Miami Central Station",
              address: "3801 NW 21st St, Miami, FL 33142",
              facilities: ["Waiting Area", "Restrooms", "Cafes", "ATM", "Wi-Fi"],
              hours: "5:30 AM - 12:00 AM"
            },
            {
              name: "Seattle Bus Terminal",
              address: "503 S Royal Brougham Way, Seattle, WA 98134",
              facilities: ["Waiting Area", "Restrooms", "Vending Machines", "Wi-Fi"],
              hours: "6:00 AM - 11:30 PM"
            }
          ].map((station, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 text-white p-4">
                <h2 className="text-xl font-bold">{station.name}</h2>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  <i className="fas fa-map-marker-alt mr-2 text-red-500"></i>
                  {station.address}
                </p>
                <p className="text-gray-600 mb-4">
                  <i className="fas fa-clock mr-2 text-blue-500"></i>
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
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Station Amenities Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "fa-wifi", name: "Wi-Fi", description: "Free wireless internet" },
              { icon: "fa-utensils", name: "Food Court", description: "Various dining options" },
              { icon: "fa-suitcase", name: "Luggage Storage", description: "Secure storage facilities" },
              { icon: "fa-restroom", name: "Restrooms", description: "Clean facilities" },
              { icon: "fa-wheelchair", name: "Accessibility", description: "Wheelchair access" },
              { icon: "fa-money-bill-alt", name: "ATM", description: "Cash withdrawal" },
              { icon: "fa-ticket-alt", name: "Ticket Office", description: "In-person ticket purchase" },
              { icon: "fa-info-circle", name: "Information Desk", description: "Customer assistance" }
            ].map((amenity, index) => (
              <div key={index} className="flex items-center p-3 bg-white rounded shadow-sm">
                <i className={`fas ${amenity.icon} text-blue-600 text-xl mr-3`}></i>
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