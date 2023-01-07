import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TableCryptoComponent } from './table-crypto.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [TableCryptoComponent],
  providers: [],
  exports: [TableCryptoComponent]
})
export class TableCryptoComponentModule {
}
