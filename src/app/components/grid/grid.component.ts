import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPostsModel } from '../../models/job-posts.model';
import { JobPostsService } from '../../services/job-posts.service';

@Component({
  selector: 'app-grid',
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  readonly data$: Observable<JobPostsModel[]> = this._jobPostsService.getAll();

  constructor(private _jobPostsService: JobPostsService) {
  }
}
