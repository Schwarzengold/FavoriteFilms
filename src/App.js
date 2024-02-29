import "./styles.css";

import React from "react";
import MovieList from "./MovieList";

function App() {
  const movies = [
    {
      id: 1,
      title: "The Fifth Element",
      director: "Luc Besson",
      year: "1997",
      studio: "Columbia Pictures",
      poster: "https://m.media-amazon.com/images/I/51ZvhXKHOuL._AC_UF894,1000_QL80_.jpg",
      url: "https://en.wikipedia.org/wiki/The_Fifth_Element",

    },

    {
      id: 2,
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      studio: "Paramount Pictures",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF894,1000_QL80_.jpg",
      url: "https://en.wikipedia.org/wiki/Interstellar_(film)",
    },

    {
      id: 3,
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      studio: "Paramount Pictures",
      poster:"https://image.tmdb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      url: "https://en.wikipedia.org/wiki/Forrest_Gump",
    },
    {
      id: 4,
      title: "Aliens",
      director: "James Cameron",
      year: 1986,
      studio: "20th Century Fox",
      poster:"https://static.posters.cz/image/1300/Плакати/aliens-side-splash-i119991.jpg",
      url: "https://en.wikipedia.org/wiki/Aliens_(film)",
    },
  ];

  return (
    <div className="App">
      <h1>Favorite Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
