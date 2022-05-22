import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { AgePipe } from './pipes/gender.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';

//Components
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderPipe } from './pipes/order.pipe';




@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonComponent,
    UppercasePipe,
    AgePipe,
    OrderPipe,
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
  ],
})
export class SalesModule { }
