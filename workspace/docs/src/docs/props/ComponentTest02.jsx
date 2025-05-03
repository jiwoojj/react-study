import React from 'react';

const ComponentTest02 = (props) => {
  console.log(props)

  return (
    <div>
      {props.children}
    </div>
  );
};

export default ComponentTest02;