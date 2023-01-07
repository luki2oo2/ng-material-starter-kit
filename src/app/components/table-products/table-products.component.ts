import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ListProductModel } from '../../models/list-product.model';
import { ListProductService } from '../../services/list-product.service';

@Component({
  selector: 'app-table-products',
  styleUrls: ['./table-products.component.scss'],
  templateUrl: './table-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableProductsComponent {
  readonly data$: Observable<ListProductModel[]> = this._listProductService.getAll();

  constructor(private _listProductService: ListProductService) {
  }
}
