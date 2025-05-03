import React, { use, useState } from 'react';

// 좋아하는 음식 이름을 입력하는 input을 만든다.

// “투표하기” 버튼을 누르면 투표 수가 1씩 증가한다.

// 아래에 음식 이름과 함께 투표 수를 보여준다.

// 음식 이름을 입력하지 않고 버튼을 누르면 "음식을 입력해주세요!" 문구 출력 (투표는 증가하지 않음)

const Practice04 = () => {

  const [food , setFood] = useState("");
  const [count , setCount] = useState(0);
  const [message , setMessage] = useState("");
  
  const foodResult = (e) => {
    setFood(e.target.value);
  }

  const increase = () => {

    if (food.trim() === ""){
      setMessage("음식을 입력하세요 먼저!")
    }

    setCount(count + 1);
  }

  return (
    <div>
      <input type="text" placeholder='좋아하는 음식을 입력하세요' value={food} onChange={foodResult}/>
      <button onClick={increase}>투표하기</button>
      {food ? <p>{food} 투표수 : {count}개</p> : <p>{message}</p>}
    </div>
  );
};

export default Practice04;