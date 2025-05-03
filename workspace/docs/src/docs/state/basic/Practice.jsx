import React, { useState } from 'react';

//isLoggedIn이라는 상태를 만들어주세요. (초기값은 false)
// 버튼을 클릭하면 로그인 상태를 토글합니다.
// 로그아웃 상태일 때 버튼 텍스트는 "로그인하기"
// 로그인 상태일 땐 "로그아웃하기"
// 로그인 상태에 따라 텍스트도 바뀝니다:
// true면 → "환영합니다! 🎉"
// false면 → "로그인해주세요! 🔐"

const Practice = () => {

  const [isLoggedIn , setIsLoggedIn] = useState(false);

  const loginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  const loginComponent = isLoggedIn ? "환영합니다" : "로그인 해주세요!"
  const loginComponent2 = isLoggedIn ? "로그아웃하기" : "로그인하기"


  return (
    <div>
      <p>{loginComponent}</p>
      <button onClick={loginToggle}>
        {loginComponent2}
      </button>
    </div>
  );
};

export default Practice;