import React, { use, useEffect, useState } from 'react';

const SideEffect = () => {

  const [color , setColor] = useState("#000");
  const [number , setNumber] = useState(0);

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
  }

  const onClickToChangeColor = () => {
    setColor((prev) => {
      let next = getRandomColor()

      console.log("prevColor" , prev)
      console.log("nextColor" , next)
      return next
    })
  }


  const onClickToChangeIncrease = () => {
    setNumber((prev)=> {
      let next = number + 1

      console.log("prevNumber" , prev)
      console.log("nextNumber" , next)
      return next
    })
  }

  useEffect (() => {
    console.log("컬러 바뀔때마다")
  } , [color])


  return (
    <div>
      <h1>{number}</h1>
      <h1 style={{color}}>안녕하세요</h1>

      <button onClick={onClickToChangeColor}>색상변경</button>
      <button onClick={onClickToChangeIncrease}>+1 증가</button>
    </div>
  );
};

export default SideEffect;