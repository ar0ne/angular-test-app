import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sign'})
export class SignPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 0) {
      return 'positive';
    } else if (value < 0) {
      return 'negative';
    }
    return "";
  }
}