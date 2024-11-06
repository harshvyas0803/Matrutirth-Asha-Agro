import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex h-20 items-center justify-between py-1 bg-amber-100 px-8 sm:px-10">
        <Link to="/" className="text-white text-2xl">
          <h1 className="flex font-bold sm:text-5xl text-3xl">
            <p className="text-amber-800">Asha</p>{" "}
            <p className="text-amber-500">Agro</p>
          </h1>
        </Link>
        
        {/* Container for the links */}
        <div className="hidden md:flex space-x-20 justify-end">
          <Link
            to="/"
            className="text-amber-950 sm:text-2xl sm:font-semibold cursor-pointer hover:text-amber-500 duration-300"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="text-amber-950 sm:text-2xl text-sm cursor-pointer hover:text-amber-500 duration-300 sm:font-semibold"
          >
            About
          </Link>
          <Link
            to="/certificate"
            className="text-amber-950 sm:text-2xl text-sm cursor-pointer hover:text-amber-500 duration-300 sm:font-semibold"
          >
            Certificate
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-amber-950 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden flex flex-col space-y-4 p-5 bg-amber-100"
          onClick={() => setIsOpen(false)}
        >
          <Link
            to="/"
            className="text-amber-950 hover:text-amber-500 duration-300"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="text-amber-950 hover:text-amber-500 duration-300"
          >
            About Us
          </Link>
          <Link
            to="/certificate"
            className="text-amber-950 hover:text-amber-500 duration-300"
          >
            Certificate
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
