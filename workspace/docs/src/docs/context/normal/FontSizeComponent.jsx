import React, {useContext, useState} from 'react';
import {FontSizeContext} from "./FontContext";

const FontSizeComponent = () => {

  const {state , actions} = useContext(FontSizeContext)
  const {fontSize} = state;
  const {setFontSize} = actions;

  return (
    <>
      <p style = {{fontSize : fontSize}}>연휴전 불타는 컨텍스트</p>
      <button onClick={() => {
        setFontSize("0.2rem")
      }}>글자를 작게 변경!😊</button>
    </>
  )
};

export default FontSizeComponent;