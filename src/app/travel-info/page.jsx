export default function TravelInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Travel Information</h1>
        <p className="mb-8">Everything you need to know for a smooth and comfortable journey.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              <i className="fas fa-suitcase mr-2"></i>
              Baggage Information
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                <span>Each passenger can bring 1 piece of luggage (up to 50 lbs) free of charge</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                <span>Additional luggage costs $10 per piece</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                <span>Oversized items (sports equipment, musical instruments) may require special arrangements</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                <span>Valuable items should be kept with you at all times</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              <i className="fas fa-id-card mr-2"></i>
              Required Documents
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                <span>Valid photo ID required for all passengers over 18</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                <span>E-ticket or printed ticket confirmation</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                <span>For international routes: valid passport and any required visas</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                <span>Student/senior discount cards if applicable</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              <i className="fas fa-bus mr-2"></i>
              Onboard Amenities
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-wifi text-blue-500 mt-1 mr-2"></i>
                <span>Free Wi-Fi on most routes (subject to availability)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-plug text-blue-500 mt-1 mr-2"></i>
                <span>Power outlets at every seat on premium buses</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-toilet text-blue-500 mt-1 mr-2"></i>
                <span>Restrooms available on all long-distance routes</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-utensils text-blue-500 mt-1 mr-2"></i>
                <span>Snacks and beverages available for purchase on select routes</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              <i className="fas fa-wheelchair mr-2"></i>
              Accessibility
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                <span>Wheelchair accessible buses available (please request 48 hours in advance)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                <span>Priority seating for elderly and passengers with disabilities</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                <span>Service animals welcome onboard</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                <span>Special assistance available upon request</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#4F46E5]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How early should I arrive before departure?",
                answer: "We recommend arriving at least 30 minutes before scheduled departure to allow time for boarding and luggage handling."
              },
              {
                question: "Can I change or cancel my ticket?",
                answer: "Yes, tickets can be changed or canceled up to 24 hours before departure. A fee may apply depending on your ticket type."
              },
              {
                question: "Are pets allowed on the bus?",
                answer: "Only service animals are permitted on our buses. Unfortunately, we cannot accommodate pets at this time."
              },
              {
                question: "Is there a lost and found service?",
                answer: "Yes, if you've left something on one of our buses, please contact our customer service within 14 days."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 