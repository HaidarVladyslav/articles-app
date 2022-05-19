import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortener'
})
export class ShortenerPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 150) {
      return value.slice(0, 150) + '...';
    }
    return value;
  }

}
