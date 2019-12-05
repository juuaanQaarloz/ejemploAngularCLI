import {Directive, ElementRef, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {AutocompleteComponent} from '../../components/autocomplete/autocomplete.component';
import {ConnectionPositionPair, Overlay, OverlayRef} from '@angular/cdk/overlay';
import {NgControl} from '@angular/forms';
import {fromEvent} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {TemplatePortal} from '@angular/cdk/portal';
import {untilDestroyed} from 'ngx-take-until-destroy';

@Directive({
  selector: '[appAutocomplete]'
})
export class AutocompleteDirective implements OnInit, OnDestroy {
  @Input() appAutocomplete: AutocompleteComponent;
  private overlayRef: OverlayRef;

  constructor(
    private host: ElementRef<HTMLInputElement>,
    private ngControl: NgControl,
    private vcr: ViewContainerRef,
    private overlay: Overlay
  ) { }

  get control() {
    return this.ngControl.control;
  }

  ngOnInit() {
    fromEvent(this.origin, 'focus').pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      this.openDropdown();

      this.appAutocomplete.optionsClick()
        .pipe(takeUntil(this.overlayRef.detachments()))
        .subscribe(( value: string ) => {
          console.log('onOptionsClick... ', value);
          this.control.setValue(value);
          console.log('this.control: ', this.control);
          console.log('this.host: ', this.host);
          this.close();
        });
    });
  }

  openDropdown() {
    this.overlayRef = this.overlay.create({
      width: this.origin.offsetWidth,
      maxHeight: 40 * 3,
      backdropClass: '',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy: this.getOverlayPosition()
    });

    const template = new TemplatePortal(this.appAutocomplete.rootTemplate, this.vcr);
    this.overlayRef.attach(template);

    overlayClickOutside(this.overlayRef, this.origin).subscribe(() => this.close());
  }

  private close() {
    this.overlayRef.detach();
    this.overlayRef = null;
  }

  private getOverlayPosition() {
    const positions = [
      new ConnectionPositionPair(
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'top' }
      ),
      new ConnectionPositionPair(
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'bottom' }
      )
    ];

    return this.overlay
      .position()
      .flexibleConnectedTo(this.origin)
      .withPositions(positions)
      .withFlexibleDimensions(false)
      .withPush(false);
  }

  get origin() {
    return this.host.nativeElement;
  }

  ngOnDestroy() {}
}

export function overlayClickOutside( overlayRef: OverlayRef, origin: HTMLElement ) {
  return fromEvent<MouseEvent>(document, 'click')
    .pipe(
      filter(event => {
        const clickTarget = event.target as HTMLElement;
        const notOrigin = clickTarget !== origin; // the input
        const notOverlay = !!overlayRef && (overlayRef.overlayElement.contains(clickTarget) === false); // the autocomplete
        return notOrigin && notOverlay;
      }),
      takeUntil(overlayRef.detachments())
    );
}
