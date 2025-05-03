import React from 'react';

const Books = ({book}) => {

  const {title , isBorrowed} = book;

  const isBorrowedState = book.isBorrowed ? "대출중" : "반납완료"
  return (
    <li>
      <p>제목 : {book.title}</p>
      <p>대출상태 : {isBorrowedState}</p>
    </li>
  );
};

export default Books;