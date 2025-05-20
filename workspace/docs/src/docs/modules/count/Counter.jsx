import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrease, increase} from "../count";

const Counter = () => {

  //액션을 발생시키는 함수
  const dispatch = useDispatch()

  //REDUX STORE에 값을 가져오는 훅 함수
  const {number} = useSelector((state) => state)
  console.log(number);

  return (
    <div>
      <button onClick={() => {dispatch(decrease())}}>-1 감소</button>
      {number}
      <button onClick={() => {dispatch(increase())}}>+1증가</button>
    </div>
  );
};

export default Counter;