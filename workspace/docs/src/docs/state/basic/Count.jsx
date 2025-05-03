import React, { useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

const Count = () => {
  
  const [number , setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1)
  }

  const decrease = () => {
    setNumber(number - 1)
  }
  
  return (
    <div>
      <button onClick={increase}>+1</button>
      {number}
      <button onClick={decrease}>-1</button>
    </div>
  );
};

export default Count;