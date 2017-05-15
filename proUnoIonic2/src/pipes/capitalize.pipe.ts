import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
 
  transform(value: string, onlyFirst: boolean, arg2:string, arg3: number, arg4: Function) {

    console.log("Paraqueidas; ",  onlyFirst, arg2, arg3, arg4 );
    

  if(onlyFirst) return value.charAt(0).toUpperCase() + value.substr(1);




    let words: string[] = value.split(' ');
    let output: string ="";

    words.forEach((value:string, index:number, words:string[])=>{
         output += value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() + ' ';

    });

    return output;
  }
}
