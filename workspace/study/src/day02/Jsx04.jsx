import React from 'react';

const Jsx04 = () => {

  const name = undefined || "회원";
  const login = true;
  const guest = true;

  return (
    <div>
      {login && guest && (
        <div>
          <h1>비회원 로그인</h1>
        </div>
      )}
      
      {login ? (
        <div>
          {name}님 안녕하세요
        </div>
      ) : (
        <div>
          로그인 실패
        </div>
      )}
    </div>
  );
};

export default Jsx04;