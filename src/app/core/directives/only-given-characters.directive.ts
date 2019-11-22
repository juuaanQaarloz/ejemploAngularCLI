import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appOnlyGivenCharacters]'
})
export class OnlyGivenCharactersDirective {
  @Input() pattern: string;
  reExp = new RegExp('[^0-9]*');
  reExpToString = (/[^0-9]*/g).toString();

  constructor(private el: ElementRef) {
  }

  @HostListener('input', ['$event']) onInputChange(event) {
    console.log('onInputChange directive');
    const initalValue = this.el.nativeElement.value;

    console.log('pattern: ', this.pattern);
    console.log('reExp: ', this.reExp);
    console.log('reExpToString: ', this.reExpToString);

    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
