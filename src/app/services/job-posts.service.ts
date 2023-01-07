import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPostsModel } from '../models/job-posts.model';
import { JobTagModel } from '../models/job-tag.model';

@Injectable({ providedIn: 'root' })
export class JobPostsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<JobPostsModel[]> {
    return this._httpClient.get<JobPostsModel[]>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts'
    );
  }

  getTag(): Observable<JobTagModel[]> {
    return this._httpClient.get<JobTagModel[]>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags'
    );
  }
}
