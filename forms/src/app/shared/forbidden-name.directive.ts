import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';


/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log('forbiddenNameValidator validating...');
    const forbidden = nameRegex.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  // Angular recognizes the directive's role in the validation process because the directive registers itself
  // with the NG_VALIDATORS provider, a provider with an extensible collection of validators.
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
