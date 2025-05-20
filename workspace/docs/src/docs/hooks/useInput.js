import React, {useState} from 'react';

const UseInput = (initialState) => {
  const [value , setValue] = useState(initialState)

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  return[value , onChangeValue]
};

export default UseInput;
