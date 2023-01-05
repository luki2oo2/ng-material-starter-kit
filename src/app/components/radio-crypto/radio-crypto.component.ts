import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-radio-crypto',
  styleUrls: ['./radio-crypto.component.scss'],
  templateUrl: './radio-crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioCryptoComponent {
  readonly data$: Observable<CryptoModel[]> = this._cryptoService.getAll();

  constructor(private _cryptoService: CryptoService) {
  }
}
