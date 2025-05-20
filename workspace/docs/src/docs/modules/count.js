// type 생성
import {createAction, handleActions} from "redux-actions";

const INCREASE = "count/INCREASE"
const DECREASE = "count/DECREASE"

// action 생성
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

// state 초기값
const initialState = {
  number : 0
}

// reducer 생성
const count = handleActions({
  [INCREASE] : (state , action) => ({number : state.number + 1}),
  [DECREASE] : (state , action) => ({number : state.number - 1})
}, initialState)



// 외부로 export
export default count;


