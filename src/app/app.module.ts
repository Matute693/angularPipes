import { RouterModule } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//Modulo personalizado
import { SharedModule } from './shared/shared.module';

//Component
import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';

//Cambiar el locale de la app
import localeIs from '@angular/common/locales/ar';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeIs)
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    RouterModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ar'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
