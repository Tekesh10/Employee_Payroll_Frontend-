import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeForm } from '../employee-form';
import { EmployeePayrollService } from '../employee-payroll.service';

@Component({
  selector: 'app-employee-payroll-form',
  templateUrl: './employee-payroll-form.component.html',
  styleUrls: ['./employee-payroll-form.component.css']
})
export class EmployeePayrollFormComponent implements OnInit {

  constructor(private router: Router, private service: EmployeePayrollService, private route: ActivatedRoute) {}

  employeeForm: EmployeeForm= new EmployeeForm("","","",[],200000,new Date,"")
  id: Number= 0;
  departments: any= ["HR", "Sales", "Engineer", "Finance", "Others"];
  departmentName: any;
  emps: any= "";
  allEmp: Array<any>=[];  
  tempArr : Array<any> = [];

  checkBoxChange(departmentName:any){
    if(!this.tempArr.includes(departmentName)){
      this.tempArr.push(departmentName);
    }
    else{
      const index = this.tempArr.indexOf(departmentName);
      if (index > -1) {
        this.tempArr.splice(index, 1);
      }
    }
  }

  ngOnInit(): void {
    if (this.service.id !=0) {
      this.employeeForm= this.service.employee;
    }
  }
  onSubmit() {
    if (this.service.id !=0) {
      this.employeeForm.department=this.tempArr;
      this.service.updateById(this.service.id, this.service.employee).subscribe((data: any)=> {
        console.log(data);
        this.router.navigate(['']);
        this.service.update(0,null);
      })
    } else {
      console.log(this.employeeForm);
      this.employeeForm.department=this.tempArr;
      this.service.addEmployee(this.employeeForm).subscribe((data: any)=> {
        this.router.navigate(['']);
      })
    }
  }

}
