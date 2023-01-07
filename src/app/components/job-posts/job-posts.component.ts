import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { JobPostsModel } from '../../models/job-posts.model';
import { JobTagModel } from '../../models/job-tag.model';
import { JobPostsService } from '../../services/job-posts.service';

@Component({
  selector: 'app-job-posts',
  styleUrls: ['./job-posts.component.scss'],
  templateUrl: './job-posts.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobPostsComponent {
  readonly data$: Observable<JobPostsModel[]> = this._jobPostsService.getAll();
  readonly tag$: Observable<JobTagModel[]> = this._jobPostsService.getTag();

  constructor(private _jobPostsService: JobPostsService) {}
}
