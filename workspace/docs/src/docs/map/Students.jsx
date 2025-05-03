import React from 'react';

const Students = ({student}) => {

  const {name , score} = student;
  return (
    <li>{name} : {score} = {score >= 60 ? "합격" : "불합격"}</li>
  );
};

export default Students;