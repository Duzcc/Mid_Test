import React from 'react';
import './Product.css';

const Product = ({ movies, onSelect }) => {
  return (
    <div className="product-container">
      <h2 className="product-title">New Release</h2>
      <div className="product-list">
        {movies.map((anime, index) => (
          <div
            key={index}
            onClick={() => onSelect(anime)}
            className="product-card"
          >
            <div className="product-image-wrapper">
              <img
                src={anime.image}
                alt={anime.movieName}
                className="product-image"
              />
              <div className="product-overlay">
                <p className="product-episode">Episode {anime.episode}</p>
              </div>
            </div>
            <h4 className="product-title-text">{anime.movieName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
