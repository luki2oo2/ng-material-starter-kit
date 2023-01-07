import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { GridComponent } from './grid.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatGridListModule, CommonModule, MatListModule, MatCardModule],
  declarations: [GridComponent],
  providers: [],
  exports: [GridComponent],
})
export class GridComponentModule {}
