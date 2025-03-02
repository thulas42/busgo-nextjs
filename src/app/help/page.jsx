export default function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Help Center</h1>
        <p className="mb-8">Find answers to your questions or contact our support team.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <i className="fas fa-phone-alt text-4xl text-blue-600 mb-4"></i>
            <h2 className="text-xl font-semibold mb-2">Call Us</h2>
            <p className="text-gray-600 mb-4">Available 24/7 for urgent matters</p>
            <p className="text-lg font-medium">1-800-BUS-RIDE</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <i className="fas fa-envelope text-4xl text-blue-600 mb-4"></i>
            <h2 className="text-xl font-semibold mb-2">Email Support</h2>
            <p className="text-gray-600 mb-4">Response within 24 hours</p>
            <p className="text-lg font-medium">support@busgo.com</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <i className="fas fa-comments text-4xl text-blue-600 mb-4"></i>
            <h2 className="text-xl font-semibold mb-2">Live Chat</h2>
            <p className="text-gray-600 mb-4">Available 8AM - 10PM</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Start Chat
            </button>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 text-[#4F46E5]">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-12">
          {[
            {
              question: "How do I change or cancel my booking?",
              answer: "You can change or cancel your booking by logging into your account and going to 'My Trips'. Changes and cancellations made at least 24 hours before departure may be eligible for a refund or credit."
            },
            {
              question: "What is your baggage policy?",
              answer: "Each passenger can bring one piece of luggage (up to 50 lbs) and one personal item for free. Additional bags can be added for a fee of $10 per bag. Oversized or overweight items may incur additional charges."
            },
            {
              question: "How early should I arrive at the bus station?",
              answer: "We recommend arriving at least 30 minutes before your scheduled departure time to allow for check-in, baggage handling, and boarding."
            },
            {
              question: "Are there restrooms on the bus?",
              answer: "Yes, all of our long-distance buses are equipped with restrooms. For short routes under 2 hours, restrooms may not be available."
            },
            {
              question: "Do you offer WiFi on your buses?",
              answer: "Yes, free WiFi is available on most of our buses. However, connectivity may vary depending on the route and location."
            }
          ].map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full p-3 border rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-3 border rounded" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <select className="w-full p-3 border rounded">
                <option>Booking Issue</option>
                <option>Refund Request</option>
                <option>Lost Item</option>
                <option>Service Feedback</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea rows="4" className="w-full p-3 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 