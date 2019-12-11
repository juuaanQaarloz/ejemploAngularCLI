import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {stringToRegExp} from '../utilities';

@Directive({
  selector: '[appOnlyGivenCharacters]'
})
export class OnlyGivenCharactersDirective {
  @Input() noAllowedCharactersPattern: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;

    if (this.noAllowedCharactersPattern) {
      const reExp = stringToRegExp(this.noAllowedCharactersPattern);

      this.el.nativeElement.value = initalValue.replace(reExp, '');
      if (initalValue !== this.el.nativeElement.value) {
        event.stopPropagation();
      }
    }
  }
}
