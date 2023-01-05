import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-menu-categories',
  styleUrls: ['./menu-categories.component.scss'],
  templateUrl: './menu-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuCategoriesComponent {
  readonly data$: Observable<string[]> = this._productsService.getAll();

  constructor(private _productsService: ProductsService) {
  }
  
}
