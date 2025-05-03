import React from 'react';
import Attendance from './Attendance';

const AttendanceContainer = () => {

  const attendanceData = [
    { id: 1, name: "서예달", isPresent: true },
    { id: 2, name: "김중재", isPresent: false },
    { id: 3, name: "이채현", isPresent: true },
    { id: 4, name: "김해선", isPresent: false },
    { id: 5, name: "조장희", isPresent: true },
    { id: 6, name: "전지후", isPresent: false },
    { id: 7, name: "안서희", isPresent: true },
    { id: 8, name: "김순호", isPresent: false },
    { id: 9, name: "고대현", isPresent: true },
    { id: 10, name: "주송혁", isPresent: true },
  ];

 

  // const result =  attendanceData
  // .filter(({isPresent}) => isPresent)
  // .map(({name , i}) => (
  //   <Attendance key={i} name={name}/>
  // ))

  const result = attendanceData
  .filter(({isPresent}) => isPresent)
  .map(({name , i}) => (
   <Attendance name={name}/>
  ))

  return (
    <ul>
      {result}
    </ul>
  );
};

export default AttendanceContainer;