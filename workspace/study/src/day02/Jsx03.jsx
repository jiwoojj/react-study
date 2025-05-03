import React from 'react';

const Jsx03 = () => {

  const name = "정지우";
  const hobby = "볼링치기";
  const hi = "안녕하세요";

  const style = {color : "blue"}

  return (
    <div style={style}>
      {hi} , 제 이름은 {name}이고, 취미는 {hobby}입니다.  
    </div>
  );
};

export default Jsx03;