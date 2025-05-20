import React, {createContext, useState} from 'react';

//취미 컨텍스트 만들기
//취미를 사용자가 입력한 취미로 바꿔주는 컨텍스트

//context
const HobbyContext = createContext({
  state : {
    hobby : ""
  },
  actions : {
    setHobby : () => {}
  }
})

//provider
const HobbyProvider = ({children}) => {

  const [hobby , setHobby] = useState("코딩하기")
  const value = {
    state : {hobby},
    actions : {setHobby}
  }


  return (
    <HobbyContext.Provider>
      {children}
    </HobbyContext.Provider>
  )
}

const HobbyConsumer = HobbyContext.Consumer;

export {HobbyContext , HobbyProvider}