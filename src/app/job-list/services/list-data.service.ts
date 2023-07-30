import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class ListDataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(environment.urlData);
  }
}
