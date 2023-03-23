import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestPaper } from '../test-paper';
import { TestPaperService } from '../test-paper.service';

@Component({
  selector: 'app-test-paper-admin-work',
  templateUrl: './test-paper-admin-work.component.html',
  styleUrls: ['./test-paper-admin-work.component.css']
})
export class TestPaperAdminWorkComponent {

  __testPaperService:TestPaperService;
  status=false;
  message='';
  tp:TestPaper=new TestPaper(0,'','','',0);
  tp1:TestPaper[]=[];


  constructor(testPaperService:TestPaperService,private http:HttpClient,private route:ActivatedRoute){
    this.__testPaperService = testPaperService;
  }

  onSubmit(){
    console.log(this.tp);
    this.__testPaperService.submitTestPaper(this.tp).subscribe(
      data=>{
        this.status=true;
        this.message="TestPaper submitted";
      },
      error=>{}
    )
  }

}
