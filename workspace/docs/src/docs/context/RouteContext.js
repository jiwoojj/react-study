import { createContext } from "react";

const MyRouteContext = createContext({
  planner : {},
  developer  : {}
})

const RouteProvider = ({children}) => {
  const value = {
    planner : {
      skills : ["디자인", "코딩", "협업", "정치"]
    },
    developer  : {
      skills : ["코딩", "잠", "돈 벌기", "협업"]
    }
  }

  return (
    <MyRouteContext.Provider value={value}>
      {children}
    </MyRouteContext.Provider>
  )
}

export {MyRouteContext, RouteProvider}