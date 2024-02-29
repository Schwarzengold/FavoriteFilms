import React from "react";
import Movie from "./Movie";
import "./styles.css";

function MovieList({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          director={movie.director}
          year={movie.year}
          studio={movie.studio}
          poster={movie.poster}
          url={movie.url}
        />
      ))}
    </div>
  );
}

export default MovieList;
