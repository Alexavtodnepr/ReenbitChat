import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[]): any {
    function sortFunction(a:any,b:any){
      let dateA = new Date(a.messages[a.messages.length-1].date).getTime();
      let dateB = new Date(b.messages[b.messages.length-1].date).getTime();
      return dateA > dateB ? -1 : 1;
    }
    value.sort(sortFunction);
    return value;
  }

}
