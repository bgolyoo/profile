import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public offsetPercentX: number;
  public offsetPercentY: number;
  private elementHeight: number;
  private elementWidth: number;

  @ViewChild('wrap')
  set elementView(el: ElementRef) {
    this.elementHeight = el.nativeElement.offsetHeight;
    this.elementWidth = el.nativeElement.offsetWidth;
  }

  constructor() { }

  public onXChange(xPos: number): void {
    this.offsetPercentX = (xPos - (this.elementWidth / 2)) / (this.elementWidth / 2) * 100;
  }

  public onYChange(yPos: number): void {
    this.offsetPercentY = (yPos - (this.elementHeight / 2)) / (this.elementHeight / 2) * -100;
  }

}
