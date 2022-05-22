import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/sales.interface';




@Pipe({
    name: 'order'
})

export class OrderPipe implements PipeTransform {

    transform(users: User[], orderBy: string = 'Worthless'): User[] {

        switch(orderBy) {
            case 'name':
            return users.sort((a,b) => (a.name > b.name) ? 1 : -1);

            case 'color':
            return users.sort((a, b) => (a.color > b.color) ? 1 : -1);
                //orden de manera ascendiente
            
            case 'gender':
                return users.sort((a, b) => (a.gender > b.gender) ? 1 : -1);
                //orden de manera descendiente
            default:
                return users;
        }

        // if(orderBy === 'Worthless') {
        //     return users;
        // }else {
        //     users = users.sort((a,b) => (a.name > b.name) ? 1 : -1)
        // }
        // return users;
    }
}