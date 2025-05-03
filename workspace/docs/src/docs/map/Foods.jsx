import React from 'react';

const Foods = ({food , style}) => {

  const {id , name} = food;
  return (
    <li style={style}>
      {name}
    </li>
  );
};

export default Foods;