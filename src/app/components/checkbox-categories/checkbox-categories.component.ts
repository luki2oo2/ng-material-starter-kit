import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-checkbox-categories',
  styleUrls: ['./checkbox-categories.component.scss'],
  templateUrl: './checkbox-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxCategoriesComponent {
  readonly date$: Observable<string[]> = this._productsService.getAll();

  constructor(private _productsService: ProductsService) {
  }
}
