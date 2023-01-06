import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CheckboxCategoriesComponent } from './checkbox-categories.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CheckboxCategoriesComponent],
  providers: [],
  exports: [CheckboxCategoriesComponent],
})
export class CheckboxCategoriesComponentModule {}
