import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestPaper } from '../test-paper';
import { TestPaperDto } from '../test-paper-dto';
import { TestPaperService } from '../test-paper.service';

@Component({
  selector: 'app-test-paper-admin-view',
  templateUrl: './test-paper-admin-view.component.html',
  styleUrls: ['./test-paper-admin-view.component.css']
})
export class TestPaperAdminViewComponent {

  __testPaperService:TestPaperService;
  router:Router;

  allTestPapers: Array<TestPaper> = [];
  testPaper:TestPaperDto[]=[];

  status=false;
  message='';

  
  testPaperId:string='';
  examId:string='';

  constructor(testPaperService:TestPaperService,router:Router)
{
  this.__testPaperService=testPaperService;
  this.allTestPapers=this.__testPaperService.getTestPaperArr();
  //this.examId=localStorage.getTestPaper('examId')||'';
  //this.testPaperId=localStorage.getTestPaper('testPaperId')||'';
  this.router=router;
}

//addTestPapers(testPaperId:number){
  //localStorage.removeTestQuestion('testPaperId');
  //localStorage.setTestQuestion('testPaperId',testPaperId+'');
  //this.router.navigate(['addtestpapers']);
 
  //}

  addTestQuestion(testPaperId:number){
    this.router.navigate(['testpapers']);
  }
  



viewAllTestPapers(){
  this.__testPaperService.getAllTestPaper().subscribe(
    data=>{
      console.log("data:-"+data);
      this.testPaper=data;
    },err=>{
      console.log("error from spring",err);
    }
  )
  }

  
}