import React, {createContext, useState} from 'react';

const FontSizeContext = createContext({
  state : {
    fontSize : ""
  },
  actions : {
    setFontSize : () => {}
  }
})

const FontSizeProvider = ({children}) => {

  const [fontSize , setFontSize] = useState("2rem")
  const value = {
    state : {
      fontSize : fontSize
    },
    actions : {
      setFontSize : setFontSize
    }
  }

  return(
    <FontSizeContext.Provider value = {value}>
      {children}
    </FontSizeContext.Provider>
  )
}

//consumer도 변수로 만들어서 내보냄
const FontSizeConsumer = FontSizeContext.Consumer;

export {FontSizeContext , FontSizeProvider , FontSizeConsumer};