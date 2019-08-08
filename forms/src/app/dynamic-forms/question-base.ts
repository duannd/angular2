export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;

  // option is object and it have default = {}
  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !(!options.required); // return false if options.required is null | undefined
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }

}
