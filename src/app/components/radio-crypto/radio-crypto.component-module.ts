import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { RadioCryptoComponent } from './radio-crypto.component';

@NgModule({
  imports: [CommonModule, MatCheckboxModule, MatFormFieldModule, MatRadioModule, ReactiveFormsModule],
  declarations: [RadioCryptoComponent],
  providers: [],
  exports: [RadioCryptoComponent],
})
export class RadioCryptoComponentModule { }
