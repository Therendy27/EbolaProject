export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            Ebola Info Center
          </a>
          <div className="flex space-x-4">
            <a href="/about" className="hover:text-gray-300 py-2">
              About Ebola
            </a>
            <a href="/symptoms" className="hover:text-gray-300 py-2">
              Symptoms
            </a>
            <a href="/prevention" className="hover:text-gray-300 py-2">
              Prevention
            </a>
            <a href="/live-updates" className="hover:text-gray-300 py-2">
              Live Updates
            </a>
            <a href="/contact" className="hover:text-gray-300 py-2">
              Contact
            </a>
            <a href="/subscribe" className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600">
            Subscribe
            </a>
          </div>
        </div>
      </nav>
    );
  }