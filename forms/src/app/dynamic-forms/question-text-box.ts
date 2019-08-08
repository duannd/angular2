import {QuestionBase} from './question-base';

export class QuestionTextBox extends QuestionBase<string> {

  controlType = 'textbox';
  type: string;

  constructor(options: any = {}) {
    super(options);
    this.type = options.type || '';
  }

}
