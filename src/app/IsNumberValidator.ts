import { AbstractControl } from '@angular/forms';

export function IsNumberValidator(control: AbstractControl) {
  const value = control.value;
  if (value == value.toString()) {
    return '';
  } else return value;
}
