import {Component, Input, OnInit} from '@angular/core';
import {QuestionBase} from './question-base';
import {FormGroup} from '@angular/forms';
import {QuestionControlService} from './question-control.service';

@Component({
  selector: 'app-dynamic-forms-child',
  templateUrl: './dynamic-forms-child.component.html',
  styles: []
})
export class DynamicFormsChildComponent implements OnInit {

  @Input() questions: QuestionBase<any>[];
  formGroup: FormGroup;
  payload = '';

  constructor(private questionControlService: QuestionControlService) {
  }

  ngOnInit() {
    this.formGroup = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.formGroup.value);
  }

}
