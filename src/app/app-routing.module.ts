import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { SelectListComponent } from './components/select-list/select-list.component';
import { TableNamesComponent } from './components/table-names/table-names.component';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { SelectListComponentModule } from './components/select-list/select-list.component-module';
import { TableNamesComponentModule } from './components/table-names/table-names.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'public-holidays', component: HolidaysComponent }, { path: 'section-list', component: SelectListComponent }, { path: 'table', component: TableNamesComponent }]), HolidaysComponentModule, SelectListComponentModule, TableNamesComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
