import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobListRoutingModule } from './job-list-routing.module';
import { JobListComponent } from './pages/job-list/job-list.component';


@NgModule({
  declarations: [
    JobListComponent
  ],
  imports: [
    CommonModule,
    JobListRoutingModule
  ]
})
export class JobListModule { }
