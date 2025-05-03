import React from 'react';
import Students from './Students';

const StudentContainer = () => {

  const students = [
    { name: '철수', score: 85 },
    { name: '영희', score: 58 },
    { name: '민수', score: 76 },
    { name: '지우', score: 49 },
  ];

  const result = students
  .filter((student)=> student.score >= 60 )
  .map((student , i) => (
    <Students key={i} student={student}/>
  ))

  return (
    <ul>
      {result}
    </ul>
  );
};

export default StudentContainer;