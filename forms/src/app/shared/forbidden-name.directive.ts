import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';


/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRegex.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenNameDirective,
      multi: true
    }
  ]
})
export class ForbiddenNameDirective implements Validator {

  @Input('appForbiddenName') forbiddenName: string;

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.forbiddenName) {
      const regExp = new RegExp(this.forbiddenName, 'i');
      const validator = forbiddenNameValidator(regExp);
      return validator(control);
    } else {
      return null;
    }
  }

}
