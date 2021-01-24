import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1> Movies Page </h1>
        {movies.map((movie,index) => (
        <div key="index">
        <h4> {movie.name} </h4>
        <p> {movie.time} </p>
        <ul>
          {movie.genres.map((genre,index)=>(<li key="index">{genre}</li>))}
        </ul>
        </div>
        ))}
    </div>
  );
};

export default Movies;
