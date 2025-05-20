import React from 'react';
import CharContext from "./CharContext";

const D = () => {
  return (
    <div>
      <CharContext.Consumer>
        {
          (context) => {
            console.log("최하위 요소에서 받은 Context!" , context)
            return <p style = {{color : context.color}}>D의 폰트 컬러 변경!</p>
          }
        }
      </CharContext.Consumer>
      최하위 컴포넌트 :D!
    </div>
  );
};

export default D;