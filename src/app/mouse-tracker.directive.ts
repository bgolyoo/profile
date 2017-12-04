import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMouseTracker]'
})
export class MouseTrackerDirective {

  @Output() xChange: EventEmitter<number> = new EventEmitter();
  @Output() yChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  @HostListener('mousemove', ['$event'])
  onMousedown(event: MouseEvent) {
    this.xChange.emit(event.clientX);
    this.yChange.emit(event.clientY);
  }

}
