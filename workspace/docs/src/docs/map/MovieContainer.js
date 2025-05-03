import React from 'react';
import Movies from './Movies';

const MovieContainer = () => {

  const movies = [
    { title: '인셉션', rating: 8.8 },
    { title: '해리포터', rating: 7.6 },
    { title: '어벤져스', rating: 8.5 },
    { title: '트와일라잇', rating: 5.9 },
  ];

  const result = movies
  .filter((movie) => movie.rating >= 8)
  .map((movie, i)=> (
    <Movies key={i} movie={movie}/>
  ))

  return (
    <ul>
      {result}
    </ul>
  );
};

export default MovieContainer;