import React from 'react';
import './Content.css';

const Content = ({ movie }) => {
  return (
    <div className="content-container">
      <img
        className="content-image"
        src={movie.image}
        alt={movie.movieName}
      />
      <div className="content-info">
        <h2 className="content-title">{movie.movieName}</h2>
        <p className="content-description">{movie.description}</p>
      </div>
    </div>
  );
};

export default Content;
