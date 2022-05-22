import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'adult'
})

export class AgePipe implements PipeTransform {
    transform(value: boolean): string {
        return value ? 'adult' : 'no adult'

    }
}