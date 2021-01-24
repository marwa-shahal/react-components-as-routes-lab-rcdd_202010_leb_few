import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1> Movies Page </h1>
        {movies.map((movie) => (
        <div>
        <h4> {movie.name} </h4>
        <p> {movie.time} </p>
        <ul>
          {movie.genres.map((genre)=>(<li>{genre}</Li>))}
        </ul>
        </div>
        ))}
    </div>
  );
};

export default Movies;
