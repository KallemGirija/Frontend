
import { Component ,OnInit} from '@angular/core';
import { TotalService }  from '../total.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  
  total: any[];
  

  constructor(private totalservice: TotalService ) { }

  ngOnInit(): void {
    this.totalservice.getTotal().subscribe(
      total=> {
        this.total = total;
      },
      error => {
        console.error(error);
      }
    );
    
  }
  
}
