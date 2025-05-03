import React, { useRef, useState } from 'react';

const ExpertFood02 = () => {

  const [foods , setFoods] = useState([]);
  const [checked , setChecked] = useState([]);
  const inputRef = useRef([]);

  const onClickAddToFoods = () => {
    setFoods(foods.concat({
      kor : inputRef.current[0].value,
      eng : inputRef.current[0].value
    }))

    setChecked(checked.concat(false))
  }

  const onClickToRemoveFood = () => {
    setFoods(foods.filter((food , i) => !checked[i]))
    setChecked(new Array(foods.length - 1).fill(false))
  }

  const onChangeCheckbox = (i) => {
    checked.splice(i , 1 , !checked[i])
    setChecked(checked.concat())
  }


  const foodList = foods.map(({kor , eng} , i) => (
    
    <li key={i}>
      <input type="checkbox" onChange={() => {onChangeCheckbox(i)}} checked={checked[i]}/>
      {kor}({eng})
    </li>
  ))

  console.log(checked)

  return (
    <div>
      <input type="text"  placeholder='한국 음식 이름' ref={(el) => {inputRef.current[0] = el}}/>
      <input type="text"  placeholder='영어 음식 이름' ref={(el) => {inputRef.current[1] = el}}/>
      <button type='button' onClick={onClickAddToFoods}>추가</button>
      <button type='button' onClick={onClickToRemoveFood}>삭제</button>

      <div>
        <ul>
          {foodList}
        </ul>
      </div>
    </div>

    
  );
};

export default ExpertFood02;