import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 z-50 bg-[#D5DED5]/50">
      <nav className="pt-4 shadow-bottom font-figtree w-full relative">
        <div className="w-full"> 
          <div className="flex w-full justify-between h-16">
            <div className="flex items-center font-cormorant">
              <Link
                to="/"
                className="inline-flex items-center h-16 px-1 border-b-2 border-transparent text-lg sm:text-xl font-medium text-black hover:text-gray-600 hover:border-gray-700"
              >
                Lok Ye
              </Link>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
              <Link
                to="/work"
                className="inline-flex items-center h-16 px-1 border-b-2 border-transparent text-sm sm:text-md font-light text-black hover:text-gray-600 hover:border-gray-700"
              >
                work
              </Link>
              <Link
                to="/play"
                className="inline-flex items-center h-16 px-1 border-b-2 border-transparent text-sm sm:text-md font-light text-black hover:text-gray-600 hover:border-gray-700"
              >
                play
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center h-16 px-1 border-b-2 border-transparent text-sm sm:text-md font-light text-black hover:text-gray-600 hover:border-gray-700"
              >
                about me
              </Link>
            </div>
          </div>
        </div>
        
      </nav>
      <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-black"></div>

    </div>
  );
};

export default Navbar;