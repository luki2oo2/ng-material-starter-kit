import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectListService } from '../../services/select-list.service';

@Component({
  selector: 'app-select-list',
  styleUrls: ['./select-list.component.scss'],
  templateUrl: './select-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectListComponent {
  readonly data$: Observable<string[]> = this._selectListService.getAll();

  constructor(private _selectListService: SelectListService) {
  }
}
