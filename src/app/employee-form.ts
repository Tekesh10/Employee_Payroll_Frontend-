export class EmployeeForm {

    public name: string = "";
    public profilePicture:string = "";
    public gender:string = "";
    public department:Array<any> = [];
    public salary: number= 0;
    public startDate: Date= new Date;
    public note:string = "";

    constructor (name : String, profilePicture: String, gender: String, department: Array<any>, salary: Number, starDate: Date, note: String) {}
}
