import React from 'react';
import CharContext from "./CharContext";

const C = () => {
  return (
    <div>
      <CharContext.Consumer>
        {
          (context) => (
            <p style = {{fontSize : context.fontSize}}>나는 c!😊</p>
          )
        }
      </CharContext.Consumer>
    </div>
  );
};

export default C;