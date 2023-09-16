import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHander implements ErrorHandler {
  constructor() {}
  handleError(error: any): void {
    console.log('Error occured :', error);
  }
}
