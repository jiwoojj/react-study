import React from 'react';

// temperature 라는 숫자 변수를 만들어서 온도를 저장해 (예: 28)

// 이 온도가 30도 이상이면 🔥 매우 더워요!
// 20도 이상이면 🙂 따뜻해요
// 10도 이상이면 🧥 쌀쌀해요
// 그 미만이면 ❄️ 추워요 라는 문장을 출력해

// 그리고 온도가 짝수면 "짝수 온도!", **홀수면 "홀수 온도!"**도 같이 출력해줘

const Jsx07 = () => {

  const temperature = 28;

  const degree = temperature >= 20 ? "따뜻해요" :  temperature >= 10 ? "쌀쌀해요" : "추워요"

  const isEvenOrOdd = temperature % 2 == 0 ? "짝수 온도!" : "홀수 온도!"

  return (
    <div>
      <p>현재 기온은 {temperature} 이므로</p>
      <p>{degree}</p>
      <p>{isEvenOrOdd}</p>
    </div>
  );
};

export default Jsx07;