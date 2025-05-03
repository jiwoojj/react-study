import React from 'react';

const Jsx08 = () => {

  const hour = 40;

  // const nowHour = 5 <= hour <= 11 ? "좋은 아침이에요!" : 12 <= hour <= 17 ? "좋은 오후에요!" : 18 <= hour <= 21 ? "좋은 저녁이에요!" : "잘 자요!!"

  const nowHour = hour >= 5 && hour <= 11 ? "좋은 아침이에요!" : hour >= 12 && hour <= 17 ? "좋은 오후에요!" : hour >= 18 && hour <= 21 ? "좋은 저녁이에요!" : "잘 자요!!"

  return (
    <div>
        지금 시간은 {hour}시 이므로 , {nowHour}
    </div>
  );
};

export default Jsx08;