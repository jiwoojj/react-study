import React, { useState } from 'react';

const Checkbox = () => {

const [message , setMessage] = useState([])

const onClickToCheck = (e) => {
    console.log(e.target.value);

    let value = e.target.value

    if(e.target.checked){
      // setMessage(message.concat(value))
      setMessage([...message , value])
    }else {
      setMessage(message.filter((m)=> m !== value))
    }
  }
  
  console.log(message)




  return (
    <div>
      <div>
        <span>front-end</span>
        <input type='checkbox' value={"front-end"} onClick={onClickToCheck}/>
      </div>

      <div>
        <span>back-end</span>
        <input type='checkbox' value={"back-end"} onClick={onClickToCheck}/>
      </div>

      <div>
        <span>ai</span>
        <input type='checkbox' value={"ai"} onClick={onClickToCheck}/>
      </div>

      <div>
        <h1>{message.map((message , i) => <p key={i}>{message}</p>)}</h1>
      </div>
    </div>
  );
};

export default Checkbox;