import React from "react";

import Movie from "./Movie/Movie";
import classes from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
