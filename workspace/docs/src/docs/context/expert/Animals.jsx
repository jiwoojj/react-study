import React, {useContext, useState} from 'react';
import AnimalsContext from "./AnimalsContext";
import Animal from "./Animal";
import useInput from "../../hooks/useInput";


//실습
// Context에 저장된 동물 세마리를 버튼으로 출력
// 동물 버튼을 누르면 해당 버튼이 삭제
// input에 동물을 입력하고 엔터를 누르면 동물 버튼이 추가
// 추가, 삭제는 모두 context의 insert(), remove() 메서드를 만들어서 사용

const Animals = () => {
  // console.log(useContext(AnimalsContext))
  const [value , onChangeValue] = useInput();
  // const [value , setValue] = useState("")
  const {state , actions} = useContext(AnimalsContext);
  const {animals} = state;

  const animalList = animals.map((animal , i) => (
    <Animal key={i} animal={animal} i={i} remove={actions.remove}/>
  ))

  // const onChangeInputValue = (e) => {
  //   setValue(e.target.value)
  // }

  const onKeyDownToAddAnimal = (e) => {
    if(e.key === 'Enter') {
      actions.insert(value)
    }
  }

  return (
    <div>
      <div>
        <ul>
          {animalList}
        </ul>
      </div>
      
      <div>
        <input type="text" placeholder='추가할 동물을 입력하세요'
        onChange={onChangeValue}
        onKeyDown={onKeyDownToAddAnimal}/>
      </div>
    </div>

  );
};

export default Animals;