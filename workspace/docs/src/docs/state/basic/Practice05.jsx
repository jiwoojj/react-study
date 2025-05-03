import React, { useState } from 'react';

//isDark라는 상태를 만들어서 다크모드인지 여부를 저장한다 (false로 시작).

// 버튼을 클릭하면 다크모드 <-> 라이트모드로 토글된다.

// 현재 모드에 따라 배경색과 글자 색이 바뀌고, 문구도 바뀐다.



const Practice05 = () => {

  const [isDark , setIsDark] = useState(false);

  const darkmodeToggle = () => {
    setIsDark(!isDark);
  }

  const textStyle = {color : isDark ? "blue" : "pink"}

  const darkComponent = isDark ? "다크모드" : "라이트모드"
  const buttonComponent = isDark ? "라이트 모드로 전환" : "다크 모드로 전환"

  return (
    <div style={textStyle}>
     <p>현재 상태는 {darkComponent} 입니다.</p>
     <button onClick={darkmodeToggle}>{buttonComponent}</button>
    </div>
  );
};

export default Practice05;