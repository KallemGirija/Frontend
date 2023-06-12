import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  private baseUrl='http://localhost:8080/api/newleads';
  constructor(private http: HttpClient) { }
  getLeads(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
