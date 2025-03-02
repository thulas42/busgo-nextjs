export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BusGo</h3>
            <p className="text-gray-300">
              A modern bus booking platform built with Next.js and Firebase.
              This project is part of my developer portfolio.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Portfolio Projects</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Project 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Project 2
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Project 3
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Next.js 14</li>
              <li className="text-gray-300">React 18</li>
              <li className="text-gray-300">Firebase</li>
              <li className="text-gray-300">Tailwind CSS</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition-colors">
                  your.email@example.com
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername" className="text-gray-300 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourusername" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Name. This project is for demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  );
} 