import {Component, ContentChild, ContentChildren, QueryList, TemplateRef, ViewChild} from '@angular/core';
import {OptionComponent} from '../option/option.component';
import {switchMap} from 'rxjs/operators';
import {merge} from 'rxjs';
import {AutocompleteContentDirective} from '../../core/directives/autocomplete-content.directive';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  exportAs: 'appAutocomplete',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {

  @ViewChild('root', {static: true}) rootTemplate: TemplateRef<any>;

  @ContentChild(AutocompleteContentDirective, {static: false})
  content: AutocompleteContentDirective;

  @ContentChildren(OptionComponent) options: QueryList<OptionComponent>;

  optionsClick() {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map(option => option.click$);
        return merge(...clicks$);
      })
    );
  }

}
