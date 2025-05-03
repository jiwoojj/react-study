import React, { useRef, useState } from 'react';

const ExpertFood = () => {
  
  const [foods, setFoods] = useState([]);
  const [checked, setChecked] = useState([]);
  const inputRef = useRef([])

  const onClickToAddFood = () => {
    setFoods(foods.concat({
      kor : inputRef.current[0].value, 
      eng : inputRef.current[1].value
    }))
    setChecked(checked.concat(false))
  }

  const onClickToRemoveFood = () => {
    setFoods(foods.filter((food, i) => !checked[i]))
    setChecked(new Array(foods.length - 1).fill(false))
  }

  const onChangeCheckBox = (i) => {
    checked.splice(i, 1, !checked[i])
    setChecked(checked.concat())
  }

  const foodList = foods.map(({kor, eng}, i) => (
    <li key={i}>
      <input 
        type='checkbox' onChange={() => {onChangeCheckBox(i)}}
        checked={checked[i]}
      />
      {kor}({eng})
    </li>
  ));

  return (
    <div>
      <input type="text" placeholder='한국 음식 이름' ref={(el) => { inputRef.current[0] = el}}/>
      <input type="text" placeholder='영어 음식 이름' ref={(el) => { inputRef.current[1] = el}}/>
      <button onClick={onClickToAddFood}>추가</button>
      <button onClick={onClickToRemoveFood}>삭제</button>
      <div>
        <ul>
          {foodList}
        </ul>
      </div>
    </div>
  );
};

export default ExpertFood;