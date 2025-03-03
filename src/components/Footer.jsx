export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BusGo</h3>
            <p className="text-gray-300">
              The easiest way to book bus tickets across South Africa.
              Compare prices, find the best routes, and travel with confidence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/schedule" className="text-gray-300 hover:text-white transition-colors">
                  Bus Schedule
                </a>
              </li>
              <li>
                <a href="/deals" className="text-gray-300 hover:text-white transition-colors">
                  Special Deals
                </a>
              </li>
              <li>
                <a href="/travel-info" className="text-gray-300 hover:text-white transition-colors">
                  Travel Information
                </a>
              </li>
              <li>
                <a href="/help" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Routes</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Johannesburg to Cape Town</li>
              <li className="text-gray-300">Durban to Pretoria</li>
              <li className="text-gray-300">Cape Town to Port Elizabeth</li>
              <li className="text-gray-300">Bloemfontein to Johannesburg</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-300">Download our app:</p>
              <div className="flex space-x-2 mt-2">
                <a href="#" className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-sm flex items-center transition-colors">
                  <i className="fab fa-apple mr-2"></i> App Store
                </a>
                <a href="#" className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-sm flex items-center transition-colors">
                  <i className="fab fa-google-play mr-2"></i> Play Store
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BusGo. All rights reserved. This is a portfolio project.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 