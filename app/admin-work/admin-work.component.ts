import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Exam } from '../exam';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {

  __examService:ExamService;
  status =false;
  message='';
  e:Exam = new Exam(0,0,0);
  e1:Exam[]=[];


  constructor(examService: ExamService,private http: HttpClient,private route:ActivatedRoute){
    this.__examService=examService;
  }

  onSubmit(){
    console.log(this.e);

    this.__examService.submitExam(this.e).subscribe(

      data=>{
        this.status=true;
        this.message="Exam submitted";
      },
      error=>{
        
      }
    )
  }

}
