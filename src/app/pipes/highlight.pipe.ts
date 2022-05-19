import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }

    let regex = new RegExp(args, 'gi');

    let match = value.match(regex);

    let arr = args.split(' ').map((arg: any) => {
      if (arg !== '') {
        return arg;
      }
    });
    let arr2 = arr.map((el: any) => {
      return new RegExp(el, 'gi');

    });
    if (arr2.length > 1 && arr2[arr2.lengt - 1] !== undefined) {
      return arr2.forEach((el: any) => {
        if(value.match(new RegExp(el, 'gi'))) {
          return value.replace(el, `<span class='highlight'>${value.match(new RegExp(el, 'gi'))?.[0]}</span>`);
        }
        
      })
    } else {
      return value.replace(regex, `<span class='highlight'>${match?.[0]}</span>`);
    }

  }
}