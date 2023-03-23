import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../exam';
import { ExamDto } from '../exam-dto';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {

  __examService:ExamService;
  router:Router;

  allExams:ExamDto[]=[];

  showStatus:boolean=false;

  constructor(examService:ExamService,router:Router){
    this.__examService=examService;
    this.router=router;
  }

  addTestPaper(examId:number){
    //localStorage.removeTestpaper('examId');
    //localStorage.setTestpaper('examId',examId+'');
    this.router.navigate(['addtestpapers']);

  }

 viewAllExams(){
  this.__examService.getAllexam().subscribe(
    data=>{
      console.log("data:-"+data);
      //this.allExams=data;
    },err=>{
      console.log("error from spring",err);
    }
  )
 }

 }
