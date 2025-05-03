import React, { useEffect, useState } from 'react';

const SideEffectMount = () => {
  
  const [posts, setPosts] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false)

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await response.json()
      return posts
    }
    
    getPosts()
    .then(setPosts)
    .catch(console.error)

    console.log("리랜더링")
    console.log("posts", posts)
  }, [isUpdate])

  const handleIsUpdate = () => {
    setIsUpdate(!isUpdate)
  }

  const postList = posts.map((post, i) => (
    <li key={i}>{post.title}</li>
  ))

  return (
    <div>
      <button onClick={handleIsUpdate}>다시 불러오기</button>
      {postList}
    </div>
  );
};

export default SideEffectMount;