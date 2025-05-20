import React from 'react';
import {Link} from "react-router-dom";

const MainContainer = () => {
  return (
    <div>
      메인페이지!
      <Link to={"/intro"}>소개 페이지로 이동!</Link>
    </div>
  );
};

export default MainContainer;