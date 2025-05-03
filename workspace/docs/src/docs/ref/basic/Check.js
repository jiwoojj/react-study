import React, { useRef } from 'react';
import CheckComponent from './CheckComponent';

const Check = () => {
  const inputRef = useRef([]);
  const formRef = useRef();

  const onclickToCheck = () => {
    for(let input of inputRef.current){
      if(!input.value){
        return alert(input.name + "값을 입력하세요")
      }
    }
    formRef.current.submit();
  }

  return (
    <div>
      <CheckComponent onclickToCheck={onclickToCheck} formRef={formRef} inputRef={inputRef} />
    </div>
  );
};

export default Check;