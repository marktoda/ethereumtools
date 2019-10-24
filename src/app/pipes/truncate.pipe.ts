import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(value: string, limit = 100, completeWords = false, ellipsis = '...') {
        if (completeWords) {
            limit = value.substr(0, limit).lastIndexOf(' ');
            if (limit == -1) {
                limit = value.length;
            }
        }
        if (value.length > limit) {
            return `${value.substr(0, limit)}${ellipsis}`;
        } else {
            return value;
        }
    }
}
