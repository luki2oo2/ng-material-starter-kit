import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Anna' },
  { position: 2, name: 'Casey' },
  { position: 3, name: 'Maria' },
  { position: 4, name: 'Viviene' },
];

@Component({
  selector: 'app-table-names',
  styleUrls: ['./table-names.component.scss'],
  templateUrl: './table-names.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableNamesComponent {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
}
