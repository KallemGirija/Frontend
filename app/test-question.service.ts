import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestQuestion } from './test-question';


@Injectable({
  providedIn: 'root'
})
export class TestQuestionService {
///{testQuestionid}/testPaper/{tpid}
constructor(private http:HttpClient) { }
baseURL:string = 'http://localhost:2004';
submitTestQuestionEndPoint:string=this.baseURL+'/testQuestion/register';
getAllTestQuestionEndPoint:string=this.baseURL+'/testQuestion/list';
getAllQuestionByTestPaperIdEndPoint:string=this.baseURL+'/testQuestion/getAllQuestion';


getTestQuestionArr(){
  return [];
}


submitTestQuestion(testQuestion:TestQuestion):Observable<TestQuestion>{
  console.log("inside  method 1 : TestQuestion added"+testQuestion);
  console.log(testQuestion.correctAnswer);

  return this.http.post<TestQuestion>(`${this.submitTestQuestionEndPoint}`,testQuestion);
}

UpdateTestPaperWithTestQuestion(testQuestionid:string,testPaperId:string):Observable<TestQuestion>{
  console.log("inside the method :"+testQuestionid);
  let updateEndPoint='';
  let testQuestionFromDB:TestQuestion=new TestQuestion(0,'','','','','','');
  updateEndPoint =this.baseURL+'/testQuestion/'+testQuestionid+'/testPaper/'+testPaperId; 
  return this.http.put<TestQuestion>(`${updateEndPoint}`,testQuestionFromDB);

}

getAlltestQuestion():Observable<TestQuestion[]>{
  console.log("inside get method 1 : TestPaper "+this.getAllTestQuestionEndPoint);
  return this.http.get<TestQuestion[]>(`${this. getAllTestQuestionEndPoint}`);

}

getAllQuestionByTestPaperId():Observable<TestQuestion[]>{
  console.log("inside get method 2 : TestQuestion "+this.getAllQuestionByTestPaperIdEndPoint);
  return this.http.get<TestQuestion[]>(`${this.getAllQuestionByTestPaperIdEndPoint}`);
 

}
}