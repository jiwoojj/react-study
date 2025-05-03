import React from 'react';

const Jsx05 = () => {

  const age = 20;

  const [pass , notPass , lucky , notLucky] = ["입장 가능" , "입장 불가" , "당첨" , "꽝"]

  const isAdult = age >= 20;
  const isEven = age % 2 == 0;

  const passComponent = (<div>{pass}</div>)
  const notPassComponent = (<div>{notPass}</div>)
  const luckyComponent = (<div>{lucky}</div>)
  const notLuckyComponent = (<div>{notLucky}</div>)

  const enter = isAdult ? passComponent : notPassComponent
  const win = isEven ? luckyComponent : notLuckyComponent

  return (
    <div>
      <p>내 나이는 {age} 이므로</p>
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;