import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from './exam';
import { ExamDto } from './exam-dto';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http:HttpClient) { }
  examArr:Exam[]=[];
  //examArr2:ExamDto[]=[];

  //localhost:2023/exam/register
  baseURL:string = 'http://localhost:2004';


  submitExamEndPoint:string=this.baseURL+'/exam/register';
  getAllExamEndPoint:string=this.baseURL+'/exam/list';
  

  getExamArr(){
    return [];

  }
  
  
  submitExam(exam:Exam):Observable<Exam>{
    console.log("inside  method 1 : Exam added"+exam);
    console.log(exam.dateOfExam);
  
    return this.http.post<Exam>(`${this.submitExamEndPoint}`,exam);
  }
  
  UpdateTestPaper(examid:string,testPaperId:string):Observable<Exam>{
    console.log("inside the method :"+examid);
    let updateEndPoint='';
    let examFromDB:Exam=new Exam(0,0,0,'');
    updateEndPoint =this.baseURL+'/exam/'+examid+'/testPaper/'+testPaperId; 
    return this.http.put<Exam>(`${updateEndPoint}`,examFromDB);
  
  }
  
  getAllExam():Observable<Exam[]>{
    console.log("inside get method 1 : TestPaper "+this.getAllExamEndPoint);
    return this.http.get<Exam[]>(`${this. getAllExamEndPoint}`);
  
  }
  
}
