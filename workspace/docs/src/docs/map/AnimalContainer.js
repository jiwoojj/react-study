import React from 'react';
import Animals from './Animals';

const AnimalContainer = () => {

  const animals = [
    { id: 1, name: "강아지" },
    { id: 2, name: "고양이" },
    { id: 3, name: "햄스터" },
    { id: 4, name: "토끼" },
  ];


  // const animalNameResult = animals.map(({name}, i) => (
  //   <li>{name}</li>
  // ))

  const animalNameResult = animals.map((animal)=> (
    <Animals animal={animal}/>
  ))

  return (
    <ul>
      {animalNameResult}
    </ul>
  );
};

export default AnimalContainer;