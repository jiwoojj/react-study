import React from 'react';
import Users from './Users';

const UserContainer = () => {

  const userList = [
      {
         id : 1,
         name : '김철수',
         age : 20,
         address : '경기도 남양주시',
         phone : "010-4117-6845"
      },
      {
         id : 2,
         name : '홍길동',
         age : 30,
         address : '서울시 강남구',
         phone : "010-1257-3542"
      },
      {
         id : 3,
         name : '장보고',
         age : 40,
         address : '서울시 용산구',
         phone : "010-3464-3434"
      },
      {
         id : 4,
         name : '김영희',
         age : 20,
         address : '경기도 구리시',
         phone : "010-7856-1476"
      },
   ]

   const style = {
      color : "red"
   }

   const userResult = userList.map((user , i) => (
      <Users key={i} user={user} style={style}/>
   ))

  return (
   <ul>
      {userResult}
   </ul>
  );
};

export default UserContainer;