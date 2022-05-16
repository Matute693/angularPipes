import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
    `
    .container-button {
      margin-top: 20px;
    }
    `
  ]
})
export class BasicsComponent {

  nameLower: string = 'matias';
  nameUpper: string = 'MATIAS';
  fullName: string = 'mAtias micHelLi';

  date: Date = new Date();; // Today
  
}
