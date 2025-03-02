export default function Schedule() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Bus Schedule</h1>
        <p className="mb-4">Browse our comprehensive bus schedule to find the perfect departure time for your journey.</p>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { route: "New York - Boston", departures: "Hourly from 6 AM to 10 PM" },
              { route: "Los Angeles - San Francisco", departures: "Every 2 hours from 7 AM to 9 PM" },
              { route: "Chicago - Detroit", departures: "Every 3 hours from 8 AM to 8 PM" },
              { route: "Miami - Orlando", departures: "Every 2 hours from 7 AM to 9 PM" }
            ].map((item, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-medium">{item.route}</h3>
                <p className="text-sm text-gray-600">{item.departures}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 