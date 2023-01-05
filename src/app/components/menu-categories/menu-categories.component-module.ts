import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MenuCategoriesComponent } from './menu-categories.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatMenuModule],
  declarations: [MenuCategoriesComponent],
  providers: [],
  exports: [MenuCategoriesComponent],
})
export class MenuCategoriesComponentModule { }
