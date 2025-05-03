import React from 'react';


// 나이라는 숫자와 취미라는 문자열 변수를 만들어 (예: age = 17, hobby = "게임")

// 나이가 20세 이상이면 "🧑‍💼 성인이에요!"
// 13세 이상이면 "🧒 청소년이에요!"
// 그 미만이면 "👶 어린이에요!" 라는 문장을 출력해

// 취미가 "게임"이면 🎮, "운동"이면 🏃, "독서"면 📚 이모지도 같이 출력해줘

const Jsx09 = () => {

  const age = 20;
  const hobby = "게임"

  const ageComponent = age >= 20 ? "성인이에요!" : age >= 13 ? "청소년이에요!" : "어린이에요!"
  const hobbyComponent = hobby === "게임" ? "🎮" : hobby === "운동" ? "🏃" : hobby === "독서" ? "📚" : "취미 없음"

  return (
    <div>
      <p>내 나이는 {age}이므로 , {ageComponent}</p>
      <p>제 취미는 {hobby} 이므로 , {hobbyComponent}</p>
    </div>
  );
};

export default Jsx09;