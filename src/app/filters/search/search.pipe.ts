import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchfilter',
    pure: false
})
export class SearchPipe implements PipeTransform {
    // Takes care of filtering the transaction list
    // when the user is searching
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        filter = filter.toLowerCase();
        return items.filter(item => item.merchant.toLowerCase().indexOf(filter) !== -1);
    }
}
