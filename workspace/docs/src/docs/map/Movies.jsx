import React from 'react';

const Movies = ({movie}) => {

  const {title , rating} = movie;

  return (
    <li>
      <p>제목 : {title}</p>
      <p>평점 : {rating}</p>
    </li>
  );
};

export default Movies;