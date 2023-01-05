import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { TableNamesComponent } from './table-names.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatTableModule],
  declarations: [TableNamesComponent],
  providers: [],
  exports: [TableNamesComponent],
})
export class TableNamesComponentModule { }
