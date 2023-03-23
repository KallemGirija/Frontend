import { Component } from '@angular/core';
import { DataOperationService } from './data-operation-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineExaminationSystem';
  loginName:string = '';
  username:string ='';
  loginUsername:string='';
  userRole:string='';
  loginStatus:boolean = false;
  photo:string='';

  __dataService:DataOperationService;

  constructor(dataService:DataOperationService)
  {
    this.__dataService = dataService;
  }

  attemptLogin(userId:number,password:string){

    if(userId == 123  && password == 'admin')
    {
      this.loginStatus = true;
      this.userRole = 'admin';
      //localStorage.setTestQuestion("username","admin");
      //localStorage.setTestQuestion("role","admin");
      console.log("username admin"+this.loginUsername)
      console.log("user role admin" +this.userRole);
      console.log("login status admin"+this.loginStatus);

    }
    else{
      //this.__dataService.doSpringLogin(userId,password).subscribe(
       // data =>
         {
          this.loginStatus = true;
          this.userRole = 'User';
          //this.loginUsername = data.firstName;
         // localStorage.setTestQuestion("username",userId+'');
          //localStorage.setTestQuestion("role","User");
          console.log("username user "+this.loginUsername)
          console.log("user role user"+this.userRole);
          console.log("login status user"+this.loginStatus);
    }
    //,err=>
    {
      //console.log(err);

    }
      
  }
}

verifyUser(username:string,password:string)
{
  console.log("inside component ts : "+username+" & "+password);
  this.loginStatus = this.__dataService.doLogin(username,password);
   if(this.loginStatus == true)
    {
      //this.userRole = localStorage.getTestQuestion('role') || '';
     // this.loginUsername = localStorage.getTestQuestion('username') || '';


      console.log("username" +this.loginUsername);
      console.log("user role"+this.userRole);
}
}

doLogout(){
  this.loginUsername='';
  this.userRole='';
  this.loginStatus=false;
  this.__dataService.doUserLogout();
}




}
