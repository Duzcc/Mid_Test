import React from 'react';

const Product = ({ movies, onSelect }) => {
  return (
    <div className="px-8">
      <h2 className="text-left text-2xl font-bold text-white mb-4">New Release</h2>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {movies.map((anime, index) => (
          <div
            key={index}
            onClick={() => onSelect(anime)}
            className="min-w-[160px] cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <img
                src={anime.image}
                alt={anime.movieName}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent flex items-center justify-center">
                <p className="text-white text-sm">Episode {anime.episode}</p>
              </div>
            </div>
            <h4 className="text-white font-semibold text-sm mt-2">
              {anime.movieName}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;