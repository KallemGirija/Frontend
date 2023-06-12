import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendBirthdayWishesService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  sendBirthdayWishes() {
    return this.http.post(`${this.apiUrl}/send-birthday-wishes`, null, { observe: 'response' });
  }

}
