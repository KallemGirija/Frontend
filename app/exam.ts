export class Exam 
{

   examId:number;
	score:number;
	dateOfExam:number;


    constructor(
        examId:number,
	score:number,
	dateOfExam:number,

    ){
        this.examId = examId;
        this.score = score;
        this.dateOfExam = dateOfExam;
    }
}
