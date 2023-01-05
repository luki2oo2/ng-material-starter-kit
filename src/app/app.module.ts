import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { MenuCategoriesComponentModule } from './components/menu-categories/menu-categories.component-module';
import { RadioCryptoComponentModule } from './components/radio-crypto/radio-crypto.component-module';
import { TableNamesComponentModule } from './components/table-names/table-names.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EmployeeListComponentModule,
    CryptoComponentModule,
    CheckboxCategoriesComponentModule,
    MenuCategoriesComponentModule,
    RadioCryptoComponentModule,
    HolidaysComponentModule,
    TableNamesComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
