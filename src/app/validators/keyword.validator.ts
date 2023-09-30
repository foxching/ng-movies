import { NonNullAssert } from '@angular/compiler';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function inValidKeywordValidator(keywords: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const text = control.value as string;
    for (const keyword of keywords) {
      if (text.toLowerCase().includes(keyword)) {
        return { invalidKeywords: true };
      }
    }
    return null;
  };
}
