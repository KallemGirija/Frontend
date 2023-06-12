import { Component  ,OnInit} from '@angular/core';
import { ExpiredService } from '../expired.service';

@Component({
  selector: 'app-expired',
  templateUrl: './expired.component.html',
  styleUrls: ['./expired.component.css']
})
export class ExpiredComponent implements OnInit{

  expired:any[];

  constructor(private expiredservice: ExpiredService ) { }

  ngOnInit(): void {
    this.expiredservice.getExpired().subscribe(
      expired=> {
        this.expired = expired;
      },
      error => {
        console.error(error);
      }
    );
  }
  }


