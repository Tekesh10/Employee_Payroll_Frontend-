export class EmployeeForm {

    name: String = "";
    profilePicture: String = "";
    gender: String = "";
    department:Array<any> = [];
    salary: Number= 0;
    startDate: Date;
    note: String = "";

    constructor (name : String, profilePicture: String, gender: String, department: Array<any>, salary: Number, startDate: Date, note: String) {
        this.name= name;
        this.profilePicture= profilePicture;
        this.gender= gender;
        this.department= department;
        this.salary= salary;
        this.startDate= startDate;
        this.note= note;
    }
}
