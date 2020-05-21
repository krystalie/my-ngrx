import * as CounterActions from './counter.action'
import { Counter }from './counter'


export type CounterTypes = CounterActions.All

export const initialState: Counter = {
	counter : 0,
	message : 'Hello World',
}


const newState = (state, newData) => {
	return Object.assign({},state,newData)
}

export function counterReducer(state: Counter = initialState, action: CounterTypes) {
	
  switch(action.type){
	  case CounterActions.EDITTEXT:
	  return newState(state, {message: action.payload});
	  
	  case CounterActions.INCREMENT:
	  return newState(state, {counter : (state.counter + 1)});
	  
	  case CounterActions.DECREMENT:
	  return newState(state, {counter : (state.counter - 1)});
	  
	  case CounterActions.RESET:
	  return initialState
	  
	  default:
	  return initialState
  }
}
