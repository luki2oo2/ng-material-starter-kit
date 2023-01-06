import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SelectListComponent } from './select-list.component';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  declarations: [SelectListComponent],
  providers: [],
  exports: [SelectListComponent],
})
export class SelectListComponentModule {}
