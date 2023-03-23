import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestQuestion } from '../test-question';
import { TestQuestionService } from '../test-question.service';
import { TestPaper } from '../test-paper';


@Component({
  selector: 'app-test-questions-add',
  templateUrl: './test-questions-add.component.html',
  styleUrls: ['./test-questions-add.component.css']
})
export class TestQuestionsAddComponent {

  __testQuestionService: TestQuestionService;
  status=false;
  message='';
  tq:TestQuestion = new TestQuestion(0,'','','','','','');

  testQuestionId:string='';
  testPaperId:string='';

  constructor(private TestQuestionService:TestQuestionService,private http:HttpClient) {
    this.__testQuestionService = TestQuestionService;
    //this.testPaperId = localStorage.getTestQuestion('testPaperId') || '';
    //this.testQuestionId=localStorage.getTestQuestion('testQuestionId')||'';
    console.log(this.testPaperId);

    
  }


  onSubmitTestQuestion() {
    console.log(this.tq);
    
    this.TestQuestionService.submitTestQuestion(this.tq).subscribe(

      data=>{
        this.status=true;
        this.message="questions were added";

      },
      error=>{

      }

    )
    
    
    
    
    }


}
