import React from 'react';

const Content = ({ movie }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg mb-10">
      <img
        className="w-full object-cover h-[400px]"
        src={movie.image}
        alt={movie.movieName}
      />
      <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full text-white">
        <h2 className="text-2xl font-bold">{movie.movieName}</h2>
        <p className="mt-2 text-sm leading-relaxed">{movie.description}</p>
      </div>
    </div>
  );
};

export default Content;