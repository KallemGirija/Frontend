import { Component ,OnInit} from '@angular/core';
import { RenewalService }  from '../renewal.service';

@Component({
  selector: 'app-renewal',
  templateUrl: './renewal.component.html',
  styleUrls: ['./renewal.component.css']
})
export class RenewalComponent implements OnInit {
  
  renewal: any[];
  

  constructor(private renewalservice: RenewalService ) { }

  ngOnInit(): void {
    this.renewalservice.getRenewal().subscribe(
      renewal => {
        this.renewal = renewal;
      },
      error => {
        console.error(error);
      }
    );
    
  }
  
}
