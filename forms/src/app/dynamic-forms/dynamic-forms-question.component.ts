import {Component, Input, OnInit} from '@angular/core';
import {QuestionBase} from './question-base';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms-question',
  templateUrl: './dynamic-forms-question.component.html',
  styles: []
})
export class DynamicFormsQuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() formGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  get isValid() {
    return this.formGroup.controls[this.question.key].valid;
  }

}
