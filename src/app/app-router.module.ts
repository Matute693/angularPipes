import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NoCommonComponent } from './sales/pages/no-common/no-common.component';
import { OrderComponent } from './sales/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'basics',
    component: BasicsComponent
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'no-common',
    component: NoCommonComponent
  },
  {
    path: 'order',
    component: OrderComponent
  }, 
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRouterModule { }
