import { createAction } from '@ngrx/store';
//import createAction from store else import Action to manually create 

//createActions 
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');


/** or

import { Action } from '@ngrx/store';

export const increment = '[counter component] Increment'
export const decrement = '[counter component] Decrement'
export const reset = '[counter component] Reset'
**/