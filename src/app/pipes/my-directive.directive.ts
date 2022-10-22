import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private ddd: ElementRef) {
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('green');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null)
  }
  changeColor(color: string) {
    this.ddd.nativeElement.style.backgroundColor = color;
  }

}
