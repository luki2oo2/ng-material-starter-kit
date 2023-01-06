import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CryptoComponent } from './crypto.component';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule, MatListModule],
  declarations: [CryptoComponent],
  providers: [],
  exports: [CryptoComponent],
})
export class CryptoComponentModule {}
