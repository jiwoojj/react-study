import React, { useState } from 'react';

// like, dislike라는 두 개의 상태 변수를 만들어 각각 좋아요 / 싫어요 개수를 저장하세요 (초기값은 0).

// "👍 좋아요", "👎 싫어요" 버튼을 각각 만들어 누르면 숫자가 1씩 증가하게 하세요.

// 화면에는 버튼들과 함께 좋아요 개수와 싫어요 개수를 출력하세요.


const Count01 = () => {

  const [like , setLike] = useState(0);
  const [disLike , setDisLike] = useState(0);


  const likeComponent = () => {
    setLike (like + 1);
  }

  const disLikeComponent = () => {
    setDisLike (disLike + 1);
  }

  return (
    <div>
      <p>좋아요 : {like}</p>
      <p>싫어요 : {disLike}</p>
      <button onClick={likeComponent}>좋아요 버튼</button>
      <button onClick={disLikeComponent}>싫어요 버튼</button>
    </div>
  );
};

export default Count01;