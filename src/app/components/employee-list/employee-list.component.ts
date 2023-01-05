import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/app/model/employee.model';

@Component({
  selector: 'employee-list',
  styleUrls: ['./employee-list.component.scss'],
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  data$: Observable<EmployeeModel[] | null> = this._httpClient.get<
    EmployeeModel[]
  >('https://eqsfaxnghe.cfolks.pl/assets/data/employees.json');

  constructor(private _httpClient: HttpClient) {}
}
