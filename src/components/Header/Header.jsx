import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 w-full py-4 text-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">Horus</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/features" className="hover:text-gray-300">
            Features
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
