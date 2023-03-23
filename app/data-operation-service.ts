import { Injectable } from '@angular/core';

interface AppUser{
    username:string;
    password:string;
    role:string;
    photo:string;
}

@Injectable({
    providedIn: 'root'
  })

export class DataOperationService {
    doSpringLogin(userId: string, password: string) {
        throw new Error('Method not implemented.');
}
allAppUsers:AppUser[] = [];

constructor() { 

    let user1:AppUser = {
        username:"albin",
        password : "123",
        role:"User",
        photo:"profile1.png"
    }

    let user2:AppUser = {
      username:"shravani",
      password : "123",
      role:"User",
      photo:"profile2.png"
    
      
    }
    let user3:AppUser = {
        username:"girija",
        password : "123",
        role:"User",
        photo:"profile3.png"
       
      }

      let user4:AppUser = {
        username:"mounika",
        password : "123",
        role:"User",
        photo:"profile4.png"
        
      }

      let user5:AppUser = {
        username:"admin",
        password : "admin",
        role:"admin",
        photo:"admin1.png"
        
      }
      this.allAppUsers = [user1,user2,user3,user4,user5];
    }


    doLogin(ipUsername:string,ipPassword:string):boolean
  {
    // localStorage.removeTestQuestion('username')
    // localStorage.removeTestQuestion('role')
    // localStorage.removeTestQuestion('loginStatus')
    // localStorage.removeTestQuestion('photo')

    console.log("inside Service : "+ipUsername+" & "+ipPassword);
   
    for(let i=0;i<this.allAppUsers.length;i++)
    {
       let thisUser:AppUser = this.allAppUsers[i];

       if(thisUser.username == ipUsername && thisUser.password == ipPassword)
       {

        // localStorage.setTestQuestion("username",ipUsername);
        // localStorage.setTestQuestion("role",thisUser.role);
        // localStorage.setTestQuestion("loginStatus",true+'');
        // localStorage.setTestQuestion("photo",thisUser.photo);
        
        console.log("inside service for true ");
        return true;
      }

    }


   
    return false;

  }

  doUserLogout()
  {
    // localStorage.removeTestQuestion('username')
    // localStorage.removeTestQuestion('role')
    // localStorage.removeTestQuestion('loginStatus')
    // localStorage.removeTestQuestion('photo')

    console.log("inside Service logout ");
  }

  }


