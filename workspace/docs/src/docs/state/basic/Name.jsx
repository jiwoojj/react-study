import React, { useState } from 'react';

const Name = () => {

  const [result , setResult] = useState("");

  const nameResult = (e) => {
    setResult(e.target.value)
  }
 
  return (
    <div>
      <p>{result}</p>
      <input type="text"  placeholder='이름을 입력하세요' value={result} onChange={nameResult}/>
    </div>
  );
};

export default Name;