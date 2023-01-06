import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListProductComponent } from './list-product.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [ListProductComponent],
  providers: [],
  exports: [ListProductComponent],
})
export class ListProductComponentModule {}
