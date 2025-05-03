import React, { useState } from 'react';

//이름을 입력할 수 있는 input과
// 주문 수량을 조절하는 + / - 버튼을 만든다.

// 이름과 수량을 함께 상태로 관리하고 화면에 출력한다.

// 조건:
// 이름이 없으면 "이름을 입력해주세요!" 문구 표시

// 수량이 1개 미만이 되지 않도록 제한 (0 안 됨!)

//예시 출력 : [지우]님이 주문한 수량: 3개
// [ - ] [ + ]



const Practice03 = () => {

  const [name , setName] = useState("");
  const [count , setCount] = useState(1);

  const nameResult = (e) => {
    setName (e.target.value)
  }

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    // setCount(count - 1)
    setCount(Math.max(1 , count - 1))
  }

  const nameComponent = name ? `[${name}]님이 주문한 수량 : ${count}개` : "이름을 입력하세요"

  return (
    <div>
      <p>{nameComponent}</p>
      <input type="text" placeholder='이름을 입력하세요!' value={name} onChange={nameResult}/>
      <button onClick={decrease}>-</button>
      {count}
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Practice03;