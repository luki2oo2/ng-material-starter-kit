import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { JobPostsComponent } from './job-posts.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatCardModule],
  declarations: [JobPostsComponent],
  providers: [],
  exports: [JobPostsComponent],
})
export class JobPostsComponentModule {}
