import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MouseTrackerDirective } from './mouse-tracker.directive';
import { TransformRotateDirective } from './transform-rotate.directive';


@NgModule({
  declarations: [
    AppComponent,
    MouseTrackerDirective,
    TransformRotateDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
