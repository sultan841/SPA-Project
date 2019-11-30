export class User {

    firstName:string;
    lastName:string;
    phone:string;
    profession:string;
    language:string;
    course:number;
    learning:string;
    gpa:number;

    constructor(firstName:string, lastName:string, phone:number, profession:string,language:string, courser:number,
        learning:string,gpa:number) {
            this.firstName = firstName;
            
        }

    // constructor(id:number,title:string,description:string, body:string, author_id:number) {
    //     this.id = id;
    //     this.description = description;
    //     this.title = title;
    //     this.body = body;
    //     this.author_id = author_id;
    // }
    // public getDescription() {
    //     return this.description
    // }
}