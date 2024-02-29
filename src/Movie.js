import React from "react";
import "./styles.css";

function Movie({ title, director, year, studio, poster, url }) {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div className="movie-card" onClick={handleClick} style={{ cursor: "pointer" }}title="Go to Wiki">
      <img className="movie-poster" src={poster} alt={`Poster of ${title}`} />
      <div className="movie-content">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-info">Directed by: {director}</p>
        <p className="movie-info">Year: {year}</p>
        <p className="movie-info">Studio: {studio}</p>
      </div>
    </div>
  );
}

export default Movie;

