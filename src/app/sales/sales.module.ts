import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

//Components
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';




@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonComponent,
    BasicsComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    NumbersComponent,
    NoCommonComponent,
    BasicsComponent,
    OrderComponent
  ]
})
export class SalesModule { }
