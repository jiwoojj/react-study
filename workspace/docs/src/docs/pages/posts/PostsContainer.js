import React from 'react';
import {Link} from "react-router-dom";

const PostsContainer = () => {
  return (
    <div>
      <div> <Link to={"/post/1"}>1번 게시글</Link></div>
      <div><Link to={"/post/2"}>2번 게시글</Link></div>
      <div><Link to={"/post/3"}>3번 게시글</Link></div>
      <div><Link to={"/post/4"}>4번 게시글</Link></div>
    </div>
  );
};

export default PostsContainer;