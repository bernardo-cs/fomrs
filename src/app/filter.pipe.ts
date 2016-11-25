import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], arr: any[]): any {
    console.log('filtering...');
    return value.filter(x => arr.indexOf(x) === -1);
  }

}
