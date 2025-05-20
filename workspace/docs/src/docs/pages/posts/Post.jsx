import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  // URL prameter
  const {id} = useParams()
  const [posts , setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/ ${id}`)
      const posts = await response.json()
      return posts;
    }

    getPosts()
      .then(setPosts)
      .catch(console.error)
  }, []);

  const postLists = posts.map(() => {
    <>

    </>
  })

  return (
    <div>
      <p>{id}번 게시글</p>
      <p>
        https://jsonplaceholder.typicode.com/posts/아이디로 데이터를 요청해서
        아래 title과 body를 각각 p태그로 출력하기
      </p>
    </div>
  );
};

export default Post;