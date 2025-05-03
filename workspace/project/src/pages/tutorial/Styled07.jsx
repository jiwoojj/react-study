import React from 'react';
import BasicButton from '../../components/button/BasicButton';

const Styled07 = () => {

  const onClickToConsol = () => {
    console.log("출력")
  }

  return (
    <div>
      <BasicButton onClick={onClickToConsol} color={"primary"} font={"h1"} shape={"large"}>컴포넌트화된 버튼</BasicButton>
    </div>
  );
};

export default Styled07;