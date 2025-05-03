import React from 'react';
import ComponentTest01 from './ComponentTest01';
import ComponentTest02 from './ComponentTest02';

const ContainerTest = () => {

  const name = "정지우";
  const age = 10;
  const address = "서울시 강남구"
  const style = {color : "blue"}

  return (
    <div>
      {/* <ComponentTest01 name = {name} age = {age} address = {address} style = {style}/> */}
      <ComponentTest02>
        <span style={style}>자식 컴포넌트</span>
      </ComponentTest02>
    </div>
  );
};

export default ContainerTest;