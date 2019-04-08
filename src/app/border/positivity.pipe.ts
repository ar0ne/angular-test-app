import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'positivity'})
export class PositivityPipe implements PipeTransform {
  transform(value: number): string {
      // TODO: do we need to support 0?
      return value > 0 ? 'positive' : 'negative';
  }
}