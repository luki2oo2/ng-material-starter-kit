import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { SelectListComponent } from './components/select-list/select-list.component';
import { TableNamesComponent } from './components/table-names/table-names.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { TableCryptoComponent } from './components/table-crypto/table-crypto.component';
import { JobPostsComponent } from './components/job-posts/job-posts.component';
import { GridComponent } from './components/grid/grid.component';
import { ListAndChipsComponent } from './components/list-and-chips/list-and-chips.component';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { SelectListComponentModule } from './components/select-list/select-list.component-module';
import { TableNamesComponentModule } from './components/table-names/table-names.component-module';
import { ListProductComponentModule } from './components/list-product/list-product.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { TableProductsComponentModule } from './components/table-products/table-products.component-module';
import { TableCryptoComponentModule } from './components/table-crypto/table-crypto.component-module';
import { JobPostsComponentModule } from './components/job-posts/job-posts.component-module';
import { GridComponentModule } from './components/grid/grid.component-module';
import { ListAndChipsComponentModule } from './components/list-and-chips/list-and-chips.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'public-holidays', component: HolidaysComponent }, { path: 'section-list', component: SelectListComponent }, { path: 'table', component: TableNamesComponent }, { path: 'list-product', component: ListProductComponent }, { path: 'crypto', component: CryptoComponent }, { path: 'checkbox-categories', component: CheckboxCategoriesComponent }, { path: 'select-category', component: SelectListComponent }, { path: 'holidays', component: HolidaysComponent }, { path: 'undefined', component: TableProductsComponent }, { path: 'table-products', component: TableProductsComponent }, { path: 'table-crypto', component: TableCryptoComponent }, { path: 'job-posts', component: JobPostsComponent }, { path: 'grid', component: GridComponent }, { path: 'list-and-chips', component: ListAndChipsComponent }]), HolidaysComponentModule, SelectListComponentModule, TableNamesComponentModule, ListProductComponentModule, CryptoComponentModule, CheckboxCategoriesComponentModule, TableProductsComponentModule, TableCryptoComponentModule, JobPostsComponentModule, GridComponentModule, ListAndChipsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
