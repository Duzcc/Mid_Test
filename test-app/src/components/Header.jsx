import React from 'react';

const Header = () => {
  return (
    <header className="px-8 pt-6">
      <div className="flex justify-between items-center mb-6">

        <div className="text-3xl font-extrabold text-white">Anonime</div>

        <div className="flex gap-8 text-gray-300 text-sm">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">List anime</a>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search anime or movie"
            className="bg-gray-700 text-sm px-4 py-2 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      <div className="text-left">
        <h2 className="text-2xl font-bold text-white mb-1">Explore</h2>
        <p className="text-gray-400">What are you gonna watch today ?</p>
      </div>
    </header>
  );
};

export default Header;
