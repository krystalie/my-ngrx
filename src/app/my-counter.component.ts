import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from '../counter.action';
import { Counter } from '../counter'

interface AppState{
	counter : Counter
}

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  counter$: Observable<Counter>;
  
  text: string

  constructor(private store: Store<AppState>) {
	  //matches the key in the app module
    this.counter$ = this.store.select('counter');
  }
	//must use new to create new instance of class
  editText() {
	  this.store.dispatch(new CounterActions.EditText(this.text))
  }

  increment() {
	  //dispatch matches the actions class name
    this.store.dispatch(new CounterActions.Increment());
  }
	//html will call this function name
  decrement() {
    this.store.dispatch(new CounterActions.Decrement());
  }

  reset() {
    this.store.dispatch(new CounterActions.Reset());
  }
}