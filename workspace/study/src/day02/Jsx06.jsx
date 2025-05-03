import React from 'react';

//score라는 숫자형 변수를 하나 만들고 점수를 저장해.

// 점수가 90점 이상이면 "A",
// 80점 이상이면 "B",
// 70점 이상이면 "C",
// 그 미만이면 "F" 등급이 출력되게 해.

// 그리고 점수가 짝수면 "짝수 점수!",
// 홀수면 "홀수 점수!" 텍스트도 같이 출력해.

const Jsx06 = () => {

  const score = 85;

  const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F"

  const evenOrOdd = score % 2 == 0 ? "짝수 점수!" : "홀수 점수!"


  return (
    <div>
      <p>내 점수는{score} 이므로,</p>
      <p>등급 : {grade} </p>
      <p>{evenOrOdd}</p>

    </div>
  );
};

export default Jsx06;