import { Component,OnInit } from '@angular/core';
import { LeadService } from '../lead.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  
  lead: any[];
  

  constructor(private leadservice: LeadService ) { }

  ngOnInit(): void {
    this.leadservice.getLeads().subscribe(
      lead => {
        this.lead = lead;
      },
      error => {
        console.error(error);
      }
    );
    
  }

  
}
