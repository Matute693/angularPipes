import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { BasicsComponent } from '../../sales/pages/basics/basics.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  
  items: MenuItem[] = [];
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Pipes of Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texts and Dates',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dolar',
            routerLink: 'numbers'
          },
          {
            label: 'Order',
            icon: 'pi pi-globe',
            routerLink: 'order'
          },
          {
            label: 'No common',
            icon: 'pi pi-align-left',
            routerLink: 'no-common'
          }
        ]
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        routerLink: 'order'
      }
    ];
  }
}
