import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { SelectListComponent } from './components/select-list/select-list.component';
import { TableNamesComponent } from './components/table-names/table-names.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { SelectListComponentModule } from './components/select-list/select-list.component-module';
import { TableNamesComponentModule } from './components/table-names/table-names.component-module';
import { ListProductComponentModule } from './components/list-product/list-product.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'public-holidays', component: HolidaysComponent }, { path: 'section-list', component: SelectListComponent }, { path: 'table', component: TableNamesComponent }, { path: 'list-product', component: ListProductComponent }, { path: 'crypto', component: CryptoComponent }]), HolidaysComponentModule, SelectListComponentModule, TableNamesComponentModule, ListProductComponentModule, CryptoComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
