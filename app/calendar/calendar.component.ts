import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentDate: any;
  currentWeek: Date[] = [];

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.generateCurrentWeek();
  }

  generateCurrentWeek() {
    const currentDay = this.currentDate.getDay();
    const diff = currentDay == 0 ? -6 : 1 - currentDay; 
    const startOfWeek = new Date(this.currentDate);
    startOfWeek.setDate(this.currentDate.getDate() + diff);
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      this.currentWeek.push(date);
    }
  }




}
