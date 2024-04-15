import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completeName'
})
export class CompleteNamePipe implements PipeTransform {

  transform(firstName: string, lastName: string): string {

    return `${firstName} ${lastName}`;
  }

}
