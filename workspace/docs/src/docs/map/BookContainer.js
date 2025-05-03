import React from 'react';
import Books from './Books';

const BookContainer = () => {

  const books = [
    { title: '자바스크립트 완벽 가이드', isBorrowed: true },
    { title: '리액트를 다루는 기술', isBorrowed: false },
    { title: '코어 자바스크립트', isBorrowed: true },
    { title: '웹 표준의 정석', isBorrowed: false },
  ];

  const result = books
  .filter(({isBorrowed}) => isBorrowed)
  .map((book , i) => (
    <Books key={i} book={book}/>
  ))

  return (
    <ul>
      {result}
    </ul>
  );
};

export default BookContainer;