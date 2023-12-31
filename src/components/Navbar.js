import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">CARTIQUE</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* Add your navigation links here */}
        </nav>

        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              {/* Add your search input or icon here */}
            </div>
            <Link to='/cart'>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-purple-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded relative">
                <ShoppingCartIcon />
                {cart.length > 0 && (
                  <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center -top-1 -right-2 rounded-full text-white">
                    {cart.length}
                  </div>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
