import { Directive, Input, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTransformRotate]'
})
export class TransformRotateDirective {

  private _offsetPercentX: number;
  private _offsetPercentY: number;

  @Input()
  set offsetPercents(offests: { x?: number, y?: number }) {
    const rotateStyleValue = 'rotateY(' + (offests.x ? offests.x : this.offsetPercentX) + 'deg) ' +
      'rotateX(' + (offests.y ? offests.y : this.offsetPercentY) + 'deg)';
    this.renderer.setStyle(this.el.nativeElement, 'transform', rotateStyleValue);
  }

  @Input()
  set offsetPercentX(offsetX: number) {
    this._offsetPercentX = offsetX;
    this.offsetPercents = { x: offsetX };
  }

  @Input()
  set offsetPercentY(offsetY: number) {
    this._offsetPercentY = offsetY;
    this.offsetPercents = { y: offsetY };
  }

  get offsetPercentX(): number {
    return this._offsetPercentX ? this._offsetPercentX : 0;
  }

  get offsetPercentY(): number {
    return this._offsetPercentY ? this._offsetPercentY : 0;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

}
