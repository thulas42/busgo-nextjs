import { helpMethods, helpFAQs } from '../../data';

export default function Help() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Help Center</h1>
        <p className="mb-8">Find answers to your questions or contact our support team.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {helpMethods.map((method, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className={`fas ${method.icon} text-2xl text-blue-600`}></i>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">{method.title}</h2>
              <p className="text-gray-600 mb-4">{method.description}</p>
              {method.contact ? (
                <p className="text-lg font-medium">{method.contact}</p>
              ) : (
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  {method.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 text-[#4F46E5]">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {helpFAQs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Still have questions?</h2>
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
                <option>Technical Problem</option>
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