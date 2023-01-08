import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { ListAndChipsComponent } from './list-and-chips.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule],
  declarations: [ListAndChipsComponent],
  providers: [],
  exports: [ListAndChipsComponent],
})
export class ListAndChipsComponentModule {}
