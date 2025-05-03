import React from 'react';

const Users = ({user , style}) => {

  const {name , age , address} = user; //비구조 할당

  return (
    <li>
      <p onClick={() => console.log(age)} style={style}>이름 : {name}</p>
      <p>나이 : {age}({age - 1})</p>
      <p>주소 : {address}</p>
    </li>
  );
};

export default Users;