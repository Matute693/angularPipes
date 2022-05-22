import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class UppercasePipe implements PipeTransform {

    transform(value: string, uppercase: boolean): string {
        // return value.toUpperCase()

        return (uppercase) ? value.toUpperCase() : value.toLowerCase()
    }
}