import React from 'react';
import S from './style';

const Styled04 = () => {
  return (
    <div>
      <S.Button backgroundColor={"red"}>버튼</S.Button>

      <S.Title color={"red"} fontSize={"50px"}>빨간글씨</S.Title>
      <S.Title color={"yellow"} fontSize={"20px"}>노란글씨</S.Title>
      <S.Title color={"blue"} fontSize={"80px"}>파란글씨</S.Title>
    </div>
  );
};

export default Styled04;
