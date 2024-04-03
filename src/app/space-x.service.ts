import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SpaceXService {

  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getLaunchesByYear(year: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?launch_year=${year}`);
  }

  getLaunchDetails(flightNumber: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${flightNumber}`);
  }
  
}
