import React from 'react';

const Animals = ({animal}) => {

  const {name} = animal
  
  return (
    <li>
      {name}
    </li>
  );
};

export default Animals;