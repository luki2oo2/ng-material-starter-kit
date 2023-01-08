import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ListAndChipsModel } from '../../models/list-and-chips.model';
import { ListAndChipsService } from '../../services/list-and-chips.service';

@Component({
  selector: 'app-list-and-chips',
  styleUrls: ['./list-and-chips.component.scss'],
  templateUrl: './list-and-chips.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListAndChipsComponent {
  readonly data$: Observable<ListAndChipsModel[]> = this._listAndChipsService.getAll();

  constructor(private _listAndChipsService: ListAndChipsService) {
  }
}
