import {Component, OnInit} from '@angular/core';
import {QuestionBase} from './question-base';
import {QuestionService} from './question.service';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styles: []
})
export class DynamicFormsComponent implements OnInit {

  questions: QuestionBase<any>[] = [];

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

}
