import { Pipe, PipeTransform } from '@angular/core';
import {Transaction} from "./transaction.model";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Transaction[], filter: string, propName: string): any {
    if(value.length<=0 || filter==''){
      return value;
    }

    let resultArray = [];
    for (let item of value){
      if (item[propName].includes(filter)){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
