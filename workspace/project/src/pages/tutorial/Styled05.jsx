import React from 'react';
import S from './style';

const Styled05 = () => {
  return (
    <S.Wrapper>
      <S.Content>

        <S.InputWrapper>
          <p>이름</p>
          <input name='name' placeholder='이름을 입력하세요' />
        </S.InputWrapper>
       
        <S.InputWrapper>
          <p>나이</p>
          <input name='age' placeholder='나이를 입력하세요' />
        </S.InputWrapper>

        <button className='btn'>전송버튼😊</button>
        
      </S.Content>
    </S.Wrapper>
  );
};

export default Styled05;