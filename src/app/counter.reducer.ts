import { createReducer, on } from "@ngrx/store";
//import createReducer function to skip case switching
import { increment, decrement, reset } from "./counter.action";
//import actions created through createAction

export const initialState = 0;


// createReducer must be used with createAction function for actions
// must have an initial state
const _counterReducer = createReducer(
  initialState,
  //on(actionCreater created name, state change function)
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0)
);


/**the returned ActionReducer(_counterReducer) must be from 
an exported reducer function**/
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
