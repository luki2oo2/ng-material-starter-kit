import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TableProductsComponent } from './table-products.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [TableProductsComponent],
  providers: [],
  exports: [TableProductsComponent]
})
export class TableProductsComponentModule {
}
