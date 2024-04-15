import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appStyleTitles]'
})
export class StyleTitlesDirective {

  @Input('tamano') tam: number = 20;

  constructor(private elemento: ElementRef) {

    this.elemento.nativeElement.style.fontSize = this.tam + 'px';
  }

}
