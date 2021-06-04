import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { StandardJob } from '../interfaces/standard-job';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StandardJobService {

  constructor(private http: HttpClient) { }

  standardJob(): Observable<StandardJob[]>{
    return this.http.get<StandardJob[]>(`${environment.api}/events`);
  }
}
