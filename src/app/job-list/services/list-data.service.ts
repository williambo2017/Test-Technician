import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Job } from '../models/job.model';
@Injectable({
  providedIn: 'root',
})
export class ListDataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(
      'https://raw.githubusercontent.com/williambo2017/Test-Technician/main/src/assets/data.json'
    );
  }
}
