import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../../services/list-data.service';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {
  active = true;
  listOfJobs: Job[] = [];
  listOfFilter: string[] = [];
  listOfJobsFilter: Job[] = [];
  constructor(private listDataService: ListDataService) {}

  ngOnInit() {
    this.listDataService.getData().subscribe((listOfJob: Job[]) => {
      this.listOfJobs = listOfJob;
      this.listOfJobsFilter = this.listOfJobs;
      this.listOfJobs[0].languages;
    });
  }

  addFilter(filter: string) {
    if (!this.listOfFilter.includes(filter)) {
      this.listOfFilter.push(filter);
    }
    this.filterList();
  }

  removeFilter(filter: string) {
    this.listOfFilter = this.listOfFilter.filter((f) => f !== filter);
    this.filterList();
  }

  filterList() {
    if (this.listOfFilter.length === 0) {
      this.listOfJobsFilter = this.listOfJobs;
      return;
    }

    this.listOfJobsFilter = this.listOfJobs.filter(
      (job) =>
        this.listOfFilter.some((element) => job.languages.includes(element)) ||
        this.listOfFilter.includes(job.role) ||
        this.listOfFilter.includes(job.level)
    );
  }
  clear() {
    this.listOfFilter = [];
    this.listOfJobsFilter = this.listOfJobs;
  }
}
