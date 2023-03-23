export class Student 
{

    studentId:number;
	userName:string;
	password:number;
	firstName:string;
	lastName:string;
	gender:string;
	emailId:string;
	mobileNo:number;


    constructor(
        studentId:number,
        userName:string,
        password:number,
        firstName:string,
        lastName:string,
        gender:string,
        emailId:string,
        mobileNo:number
    
    ){
        this.studentId = studentId;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.emailId = emailId;
        this.mobileNo = mobileNo;

    }
}
