import React, {useContext, useState} from 'react';
import {FontSizeConsumer, FontSizeContext} from "./FontContext";


const FontSizeInputComponent = () => {

  const [value , setValue] = useState("");
  const {state , actions} = useContext(FontSizeContext)

  const onChangeValue = (e) => {
    setValue(e.target.value);
  }


  const onKeyDownChangeFontSize = (e) => {
    if (e.key === 'Enter') {
      actions.setFontSize(value)
    }
  }


  return (
    <div>
      <p style={{fontSize : state.fontSize}}>실습 폰트😊</p>
      <input type="text" placeholder='폰트 크기를 입력하세요' onChange={onChangeValue} onKeyDown={onKeyDownChangeFontSize}/>
    </div>
  );
};

export default FontSizeInputComponent;