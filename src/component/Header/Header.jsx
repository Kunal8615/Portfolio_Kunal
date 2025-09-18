import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);  // State to manage menu toggle

  return (
    <header className="shadow-lg sticky z-50 top-0 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <nav className="px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center group">
            <h1 className="text-xl font-extrabold text-white group-hover:text-orange-400 transition-colors duration-300">
              Kunal.in <span className="text-orange-400">👁️</span>
            </h1>
          </Link>
          <div className="flex items-center lg:order-2">
            {/* Hamburger Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg lg:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
          <div className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 bg-gray-900/50 lg:bg-transparent rounded-lg lg:rounded-none p-4 lg:p-0 backdrop-blur-sm lg:backdrop-blur-none">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 ${isActive ? "text-orange-400" : "text-gray-300"} pl-3 duration-300 border-b border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0 transition-all duration-300 rounded-lg lg:rounded-none`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="About"
                  className={({ isActive }) =>
                    `block py-2 pr-4 ${isActive ? "text-orange-400" : "text-gray-300"} pl-3 duration-300 border-b border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0 transition-all duration-300 rounded-lg lg:rounded-none`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="project"
                  className={({ isActive }) =>
                    `block py-2 pr-4 ${isActive ? "text-orange-400" : "text-gray-300"} pl-3 duration-300 border-b border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0 transition-all duration-300 rounded-lg lg:rounded-none`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Skill"
                  className={({ isActive }) =>
                    `block py-2 pr-4 ${isActive ? "text-orange-400" : "text-gray-300"} pl-3 duration-300 border-b border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0 transition-all duration-300 rounded-lg lg:rounded-none`
                  }
                >
                Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Collect"
                  className={({ isActive }) =>
                    `block py-2 pr-4 ${isActive ? "text-orange-400" : "text-gray-300"} pl-3 duration-300 border-b border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0 transition-all duration-300 rounded-lg lg:rounded-none`
                  }
                >
                  Certificate
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Insta"
                  className={({ isActive }) =>
                    `block py-2 pr-4 ${isActive ? "text-orange-400" : "text-gray-300"} pl-3 duration-300 border-b border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0 transition-all duration-300 rounded-lg lg:rounded-none`
                  }
                >
                  Page
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
