import React from 'react';

const Animal = (props) => {
  console.log(props);
  const {animal , i , remove} = props
  return (
    <li>
      <button onClick={() => {remove(i)}}>{animal}</button>
    </li>
  );
};

export default Animal;