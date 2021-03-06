import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
//import store to set store throughout?
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
//import reducer function 

@NgModule({
  declarations: [AppComponent, MyCounterComponent],
  imports: [
    BrowserModule,
	FormsModule,
	/**StoreModule.forRoot enables global providers 
	throughout the app to access store**/
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}