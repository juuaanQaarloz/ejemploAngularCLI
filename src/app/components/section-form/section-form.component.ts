import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SectionInterface} from '../../models/section-interface';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit {
  @Input() sectionObj: SectionInterface;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
    // console.log('sectionObj', this.sectionObj);
  }

}
