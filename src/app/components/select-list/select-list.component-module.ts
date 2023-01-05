import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SelectListComponent } from './select-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [SelectListComponent],
  providers: [],
  exports: [SelectListComponent]
})
export class SelectListComponentModule {

}
