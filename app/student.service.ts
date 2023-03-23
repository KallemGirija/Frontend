import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { StudentDto } from './student-dto';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  studentArr:Student[]=[];
  //studentArr2:StudentDto[]=[];

  //localhost:2023/student/register
  baseURL:string = 'http://localhost:2004';


  submitStudentEndPoint:string=this.baseURL+'/student/register';
  getAllStudentEndPoint:string=this.baseURL+'/student/list';
  

  getStudentArr():Student[]
  {
    return this.studentArr;
  }

  submitStudent(student: Student):Observable<Student> {

    console.log("inside method 1 : Student added" +student);
    console.log(student.gender);
    
    
    return this.http.post<Student>(`${this.submitStudentEndPoint}`,student);
    
  }


  getAllStudent():Observable<StudentDto[]>{
    console.log("inside get method 1 : Student "+this.getAllStudentEndPoint);
    return this.http.get<StudentDto[]>(`${this.getAllStudentEndPoint}`);

  }

 

}


