import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../exam';
import { ExamDto } from '../exam-dto';
import { ExamService } from '../exam.service';
import { TestPaper } from '../test-paper';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {

  __examService:ExamService;
  router:Router;
  allExams: Array<Exam> = [];
  exams:ExamDto[]=[];

  status = false;
  message = '';

  examId:string='';
  testPaperId:string='';

  constructor(examService:ExamService,router:Router){
    this.__examService=examService;
    this.allExams = this.__examService.getExamArr();
    //this.examId  =  localStorage.getExam('examId') || '';
    //this.testPaperId=localStorage.getTestPaper('testPaperId')||'';
    this.router=router;
  }

  addTestPaper(examId:number){
    //localStorage.removeTestpaper('examId');
    //localStorage.setTestpaper('examId',examId+'');
    this.router.navigate(['addtestpapers']);

  }

 viewAllExams(){
  this.__examService.getAllExam().subscribe(
   data=>{
    console.log("data:-"+data);
    this.allExams=data;
  },err=>{
    console.log("error from spring",err);
    
   }
  )
   }
   onUpdate(){
    this.__examService.UpdateTestPaper(this.examId,this.testPaperId).subscribe(
      data=>{
        this.status=true;
        this.message="TestPaper updated";
      },
      error=>{
        
      }
    )
  }
 }

 
