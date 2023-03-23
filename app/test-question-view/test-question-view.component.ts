import { Component } from '@angular/core';
import { TestQuestionDto } from '../test-question-dto';
import { TestQuestionService } from '../test-question.service';
import { Router } from '@angular/router';
import { TestQuestion } from '../test-question';
import { TestPaper } from '../test-paper';

@Component({
  selector: 'app-test-question-view',
  templateUrl: './test-question-view.component.html',
  styleUrls: ['./test-question-view.component.css']
})
export class TestQuestionViewComponent {

  __TestQuestionService:TestQuestionService;
  router:Router;
  allTestQuestions: Array<TestQuestion> = [];
  testQuestion:TestQuestionDto[]=[];

  status=false;
  message='';

  testQuestionId:string='';
  testPaperId:string='';
  

  constructor(__TestQuestionService:TestQuestionService,router: Router){
    this.__TestQuestionService=__TestQuestionService;
    this.allTestQuestions=this.__TestQuestionService.getTestQuestionArr();
    //this.testPaperId=localStorage.getTestQuestion('testPaperId')|| '';
    //this.testQuestionId=localStorage.getTestQuestion('testQuestionId')||'';
    this.router = router;
  }

  addTestQuestion(testQuestionId:number){
    //localStorage.removeTestQuestion('testQuestionId');
    //localStorage.setTestQuestion('testQuestionId',testQuestionId+'');
    this.router.navigate(['addtestQuestions']);
  }

  viewAllTestQuestions(){
    this.__TestQuestionService.getAlltestQuestion().subscribe(
      data=>{
        console.log("data:-"+data);
        this.testQuestion  = data;
      },err=>{
        console.log("error from spring",err);

      }
    )
 
    }

    onUpdate(){
      this.__TestQuestionService.UpdateTestPaperWithTestQuestion(this.testQuestionId,this.testPaperId).subscribe(

        data=>{
          this.status=true;
          this.message="TestQuestions updated";
        },error=>{
          
        }
      )
    }
}


