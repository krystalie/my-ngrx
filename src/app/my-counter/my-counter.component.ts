import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.action';


interface AppState{
	count: number
}

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
	  //matches the key in the app module
    this.count$ = this.store.select('count');
  }

  increment() {
	  //dispatch matches the actions
    this.store.dispatch(increment());
  }
	//html will call this function name
  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}