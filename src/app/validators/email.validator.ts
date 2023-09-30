import { NonNullAssert } from '@angular/compiler';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailDomainValidator(domain: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value as string;
    if (email.endsWith(domain)) {
      return NonNullAssert;
    } else {
      return { invalidDomain: true };
    }
  };
}
