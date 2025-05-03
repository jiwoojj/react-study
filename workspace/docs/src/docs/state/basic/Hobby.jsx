import React, { use, useState } from 'react';

// 13분
// 사용자에게 취미를 입력 받고 화면에 실시간으로 출력한다.
// 취미가 축구라면, 글자의 크기를 50px로 바꾼다.
// 취미가 농구라면, 글자의 컬러를 blue로 바꾼다.

const Hobby = () => {

  const [result , setResult] = useState("");
  const [style , setStyle] = useState({});

  const hobbyResult = (e) => {
    const newHobby = e.target.value;

    setResult(newHobby);

    if(newHobby === "축구") {
      setStyle({fontSize : "50px"})
    }else if (newHobby === "농구"){
      setStyle({color : "blue"})
    }else {
      setStyle({})
    }
  }


  return (
    <div>
      <p style={style}>{result}</p>
      <input type="text" placeholder='취미를 입력하세요' onChange={hobbyResult}/>
    </div>
  );
};

export default Hobby;