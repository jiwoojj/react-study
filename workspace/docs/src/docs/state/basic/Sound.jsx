import React, { useState } from 'react';

const Sound = () => {

  let [result , setResult] = useState("");

  const dogSound = () => {
    setResult("멍멍")
  }

  const catSound = () => {
    setResult("야옹")
  }

  return (
    <div>
      <p>동물소리 : {result}</p>
     <button onClick={dogSound}>강아지 버튼</button>
     <button onClick={catSound}>고양이 버튼</button>
    </div>
  );
};

export default Sound;