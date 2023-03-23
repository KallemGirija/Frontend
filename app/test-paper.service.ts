import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestPaper } from './test-paper';
import { Observable } from 'rxjs';
import { TestPaperDto } from './test-paper-dto';
import { TestQuestionDto } from './test-question-dto';

@Injectable({
  providedIn: 'root'
})
export class TestPaperService {

  constructor(private http:HttpClient) { }
  testPaperArr:TestPaper[]=[];
  //testPaperArr2:TestPaperDto[]=[];

  //localhost:2023/testPaper/register
  baseURL:string = 'http://localhost:2004';


  submitTestPaperEndPoint:string=this.baseURL+'/testPaper/register';
  getAllTestPaperEndPoint:string=this.baseURL+'/testPaper/list';
  getTestPaperByCourseEndPoint:string=this.baseURL+'/testPaper/testPaperbycourse';

  getTestPaperArr():TestPaper[]
  {
    return this.testPaperArr;
  }

  submitTestPaper(testPaper: TestPaper):Observable<TestPaper> {

    console.log("inside method 1 : TestPaper added" +testPaper);
    console.log(testPaper.course);
    
    
    return this.http.post<TestPaper>(`${this.submitTestPaperEndPoint}`,testPaper);
    
  }


  getAllTestPaper():Observable<TestPaperDto[]>{
    console.log("inside get method 1 : TestPaper "+this.getAllTestPaperEndPoint);
    return this.http.get<TestPaperDto[]>(`${this.getAllTestPaperEndPoint}`);

  }

 getTestPaperByCourse(course:string):Observable<TestPaperDto[]>{
  console.log("inside get course method:"+this.getTestPaperByCourseEndPoint);
  this.getTestPaperByCourseEndPoint=this.getTestPaperByCourseEndPoint+'/'+course;
  return this.http.get<TestPaperDto[]>(`${this.getTestPaperByCourseEndPoint}`)
  
 }

}
