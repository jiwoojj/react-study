import React, { useState } from 'react';

//name이라는 상태를 만들어 입력한 이름을 저장하세요. (초기값은 빈 문자열 "")

{/* <input> 텍스트 필드를 만들어서 이름을 입력할 수 있게 하세요. */}

// 사용자가 입력을 할 때마다, 아래 문장처럼 실시간으로 반영되게 하세요.
//단, 아무것도 입력하지 않았을 땐 → "이름을 입력해주세요!" 출력

const Practice02 = () => {

  const [name , setName] = useState("");

  const nameResult = (e) => {
    setName(e.target.value)
  }

  const nameComponent = name ? `[${name}]님 안녕하세요!` : "이름을 입력하세요!"


  return (
    <div>
      <p>{nameComponent}</p>
      <input type="text" placeholder='이름을 입력하세요' value={name} onChange={nameResult} />
    </div>
  );
};

export default Practice02;