import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="pt-4 shadow-bottom font-figtree w-full relative">
        <div className="w-full"> 
          <div className="flex w-full justify-between h-16">
            <div className="flex items-center font-cormorant">
              <Link
                to="/"
                className="inline-flex items-center h-16 px-1 border-b-2 border-transparent text-xl font-medium text-gray-800 hover:text-gray-900 hover:border-gray-300"
              >
                Lok Ye
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/work"
                className="inline-flex items-center h-16 px-1 border-b-2 border-transparent text-md font-light text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                work
              </Link>
              <Link
                to="/play"
                className="inline-flex items-center h-16 px-1 border-b-2 border-transparent text-md font-light text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                play
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center h-16 px-1 border-b-2 border-transparent text-md font-light text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                about me
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
      </nav>
    </div>
  );
};

export default Navbar;