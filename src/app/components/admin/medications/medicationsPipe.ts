import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
    name: 'MedicationsPipe',
})
export class MedicationsPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                if ((el.Name != undefined || el.Name != null)
            ) {
                return el.Name.toLowerCase().indexOf(input) > -1 ;
               // el.PhoneNo.indexOf(input) > -1 ||
               // el.PersonName.toLowerCase().indexOf(input) > -1;
                } else {
                    return  el.Name.toLowerCase(input).indexOf(input) > -1;
                   }
            });
        }
        return value;
    }
}
