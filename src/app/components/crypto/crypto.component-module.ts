import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CryptoComponent } from './crypto.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CryptoComponent],
  providers: [],
  exports: [CryptoComponent],
})
export class CryptoComponentModule {}
