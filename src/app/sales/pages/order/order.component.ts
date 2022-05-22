import { Component, OnInit } from '@angular/core';
import { Color, User } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  uppercase: boolean = false;
  orderBy: string = '';
  users: User[] = [
    {
      name: 'Matias',
      color: Color.orange,
      gender: 'Male',
      adult: true,
    },
    {
      name: 'Abigail',
      color: Color.red,
      gender: 'Female',
      adult: false,
    },
    {
      name: 'Santiago',
      color: Color.green,
      gender: 'Male',
      adult: true
    },
    {
      name: 'Elisa',
      color: Color.blue,
      gender: 'Female',
      adult: true
    }
  ];
  click() {
    this.uppercase = !this.uppercase
  }

  orderName(value: string): void {
   this.orderBy = value;
  }
}
