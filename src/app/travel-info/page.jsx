import { travelInfo, travelFAQs } from '../../data';

export default function TravelInfo() {
  // Helper function to render standard info cards
  const renderInfoCard = (info, type) => {
    return (
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <i className={`fas ${info.icon} text-blue-700`}></i>
          </div>
          <h2 className="text-xl font-semibold text-blue-700">
            {info.title}
          </h2>
        </div>
        <ul className="space-y-3">
          {info.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-2">
                <i className="fas fa-check text-green-500 text-xs"></i>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Helper function to render amenities card with custom icons
  const renderAmenitiesCard = (info) => {
    return (
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <i className={`fas ${info.icon} text-blue-700`}></i>
          </div>
          <h2 className="text-xl font-semibold text-blue-700">
            {info.title}
          </h2>
        </div>
        <ul className="space-y-3">
          {info.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-2">
                <i className={`fas ${item.icon} text-blue-500 text-xs`}></i>
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Travel Information</h1>
        <p className="mb-8">Everything you need to know for a smooth and comfortable journey.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderInfoCard(travelInfo.baggage, 'standard')}
          {renderInfoCard(travelInfo.documents, 'standard')}
          {renderAmenitiesCard(travelInfo.amenities)}
          {renderInfoCard(travelInfo.accessibility, 'standard')}
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#4F46E5]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {travelFAQs.map((faq, index) => (
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