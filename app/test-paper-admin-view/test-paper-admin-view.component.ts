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

  allTestpapers:TestPaperDto[]=[];
  showStatus:boolean=false;

  constructor(testPaperService:TestPaperService,router:Router)
{
  this.__testPaperService=testPaperService;
  this.router=router;
}

addTestQuestion(testPaperId:number){
  //localStorage.removeTestQuestion('testPaperId');
  //localStorage.setTestQuestion('testPaperId',testPaperId+'');
  this.router.navigate(['addquestions']);

}

viewAllTestPapers(){
  this.__testPaperService.getAllTestPaper().subscribe(
    data=>{
      console.log("data:-"+data);
      this.allTestpapers=data;
    },err=>{
      console.log("error from spring",err);
    }
  )
}
}
