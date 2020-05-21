import { Action } from '@ngrx/store';

export const EDITTEXT = '[counter component] Edit Text'
export const INCREMENT = '[counter component] Increment'
export const DECREMENT = '[counter component] Decrement'
export const RESET = '[counter component] Reset'


export class EditText implements Action {
	readonly type = EDITTEXT;
	
	constructor(public payload: string){}
}
export class Increment implements Action {
	readonly type = INCREMENT
	
}

export class Decrement implements Action {
	readonly type = DECREMENT
	
}

export class Reset implements Action {
	readonly type = RESET
	
}

export type All
	= EditText
	| Increment
	| Decrement
	| Reset;