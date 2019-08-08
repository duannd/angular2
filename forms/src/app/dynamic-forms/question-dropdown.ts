import {QuestionBase} from './question-base';

export class QuestionDropdown extends QuestionBase<string> {

  controlType = 'dropdown';
  options: { key?: string, value?: string }[] = [];

  constructor(options: any = {}) {
    super(options);
    this.options = options.options || [];
  }

}
