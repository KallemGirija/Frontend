export class TestQuestionDto
 {

   questionId:number;
	question:string;
	option1:string;
	option2:string;
	option3:string;
	option4:string;


    constructor(
        questionId:number,
	question:string,
	option1:string,
	option2:string,
	option3:string,
	option4:string

    ){
        this.questionId = questionId;
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        
    }
}
