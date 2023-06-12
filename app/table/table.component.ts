import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  table: any[];
  

  constructor(private apiserviceservice: ApiserviceService) { }

  ngOnInit(): void {
    this.apiserviceservice.getUsers().subscribe(
      table => {
        this.table = table;
      },
      error => {
        console.error(error);
      }
    );
    
  }

  
  }


