import React from 'react';

const ComponentTest01 = ({name , age , address , style}) => {


  return (
    <div style={style}>
      <p>{name}</p>
      <p>{address} </p>
      <p>{age}</p>
    </div>
  );
};

export default ComponentTest01;