import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendBirthdayWishesService } from '../send-birthday-wishes.service';

@Component({
  selector: 'app-birthday-wish',
  templateUrl: './birthday-wish.component.html',
  styleUrls: ['./birthday-wish.component.css']
})
export class BirthdayWishComponent implements OnInit{
  show = false
  thanks = false
  from: string = "sirpiyamahi97@gmail.com";
  sub:string = "Happy Birthday!";
  message: string = "Wishing you a very happy birthday!";
  private apiUrl = 'http://localhost:8080/api';
  email: string="";

  constructor(private route: ActivatedRoute,private http: HttpClient, private sendBirthdayWishesService: SendBirthdayWishesService) {}
  ngOnInit(): void {
    this.http.get<string>(`${this.apiUrl}/birthday-today`).subscribe((email) => {
      this.email = email;
     });
  }
 
  sendWishes() {
    this.sendBirthdayWishesService.sendBirthdayWishes()
      .subscribe(response => {
        console.log(response.body);
      }, error => {
        console.log(error);
      });
  }

  openpopup(){
    this.show =true
  }

  closepopup(){
    this.show = false
  }

  sendpopup(){
    this.show = true

  }

 

}
