import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page </h1>
      {actors.map((actor)=>(
      <h4>{actor.name} </h4>
      <ul>
      {actors.movies.map((movie)=>(
       <li>{movie}</li>
      ))
      </ul>
      
      ))}
    </div>
  );
};

export default Actors;
