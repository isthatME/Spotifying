import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(playlist: any, term:any): unknown {
    if(term == undefined) return playlist
   
    return playlist.filter(function (playlist){
      return playlist.name.toLowerCase().includes(term.toLowerCase()) || playlist.singer.toLowerCase().includes(term.toLowerCase()) 
    })

  }

}
