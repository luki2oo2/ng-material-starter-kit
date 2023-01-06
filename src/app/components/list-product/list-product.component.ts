import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ListProductModel } from '../../models/list-product.model';
import { ListProductService } from '../../services/list-product.service';

@Component({
  selector: 'app-list-product',
  styleUrls: ['./list-product.component.scss'],
  templateUrl: './list-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListProductComponent {
  readonly date$: Observable<ListProductModel[]> = this._listProductService.getAll();

  constructor(private _listProductService: ListProductService) {
  }
}
