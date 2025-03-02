export default function Deals() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Special Deals</h1>
        <p className="mb-8">Take advantage of our limited-time offers and save on your next journey!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Early Bird Special",
              discount: "25% OFF",
              description: "Book at least 14 days in advance and save 25% on your ticket",
              code: "EARLY25"
            },
            {
              title: "Weekend Getaway",
              discount: "20% OFF",
              description: "Travel on weekends and enjoy 20% discount on round trips",
              code: "WEEKEND20"
            },
            {
              title: "Group Travel",
              discount: "30% OFF",
              description: "Groups of 4 or more get 30% off when booking together",
              code: "GROUP30"
            },
            {
              title: "Student Discount",
              discount: "15% OFF",
              description: "Valid student ID gets you 15% off on any route",
              code: "STUDENT15"
            },
            {
              title: "Senior Citizen",
              discount: "20% OFF",
              description: "Travelers over 65 years enjoy 20% discount",
              code: "SENIOR20"
            },
            {
              title: "Last Minute",
              discount: "10% OFF",
              description: "Book within 24 hours of departure for 10% savings",
              code: "LAST10"
            }
          ].map((deal, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 text-white p-4">
                <h2 className="text-xl font-bold">{deal.title}</h2>
                <p className="text-2xl font-bold mt-2">{deal.discount}</p>
              </div>
              <div className="p-4">
                <p className="mb-4">{deal.description}</p>
                <div className="bg-gray-100 p-2 rounded text-center">
                  <span className="text-sm text-gray-600">Use code:</span>
                  <span className="font-bold ml-2">{deal.code}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 