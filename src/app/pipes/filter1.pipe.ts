import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

 
  transform(allContacts: any[], searchTerm: string, propsName: string): any[] {
    const result: any[] = [];

    if (!allContacts || searchTerm == '' || propsName == '') {
      return result;
    }

    allContacts.forEach((contact: any) => {
      if (
        contact[propsName]
          .trim()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase())
      ) {
        result.push(contact);
      }
    });
    return result;
  }
}
