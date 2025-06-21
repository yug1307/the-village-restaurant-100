import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Topbar.css'; 

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-yellow-700 text-white">
      <div className="container mx-auto flex items-center justify-between px-3 py-3">
        {/* Logo or Brand */}
        <div className="text-lg text-white font-bold">The Village Restaurant</div>

        {/* Hamburger for small devices */}
        <button 
          className="md:hidden text-2xl text-white text-center"
          onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
  
        {/* Menu Items */} 
        <ul className={`flex-col items-center justify-center md:flex-row md:flex md:items-center md:space-x-2 md:space-y-0 absolute md:static right-0 top-12 bg-yellow-700 md:bg-transparent w-full md:w-auto z-50 transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
          <Link to="/"><div className="block px-4 py-2 hover:text-purple-400">Home</div></Link>
          <Link to="/nonveg"><div className="block px-4 py-2 hover:text-purple-400">Non - Veg</div></Link>
          <Link to="/veg"><div className="block px-4 py-2 hover:text-purple-400">Veg</div></Link>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
