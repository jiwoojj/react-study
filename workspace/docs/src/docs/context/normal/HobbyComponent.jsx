import React, {useContext, useState} from 'react';
import {HobbyContext} from "./HobbyContext";


const HobbyComponent = () => {

  const {state , actions} = useContext(HobbyContext);
  const [inputValue , setInputValue] = useState("");

  const onChangeToInput = (e) => {
    setInputValue(e.target.value)
  };

  const onClickToInput = (e) => {
    if(e.key === 'Enter') {
      actions.setHobby(inputValue);
    }
  }

  return (
    <div>
      <p>{state.hobby}</p>
      <input type="text" onChange={onChangeToInput} value={inputValue}/>
      <button onClick={onClickToInput}>취미 변경</button>
    </div>
  );
};

export default HobbyComponent;