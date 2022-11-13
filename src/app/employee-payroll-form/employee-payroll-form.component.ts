import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeePayrollService } from '../employee-payroll.service';
import { EmployeePayrollModule } from '../employee-payroll/employee-payroll.module';

@Component({
  selector: 'app-employee-payroll-form',
  templateUrl: './employee-payroll-form.component.html',
  styleUrls: ['./employee-payroll-form.component.css']
})
export class EmployeePayrollFormComponent implements OnInit {

  constructor(private router: Router, private service: EmployeePayrollService, private route: ActivatedRoute) {}

  public employeeForm: EmployeePayrollModule= new EmployeePayrollModule("","","",[],200000,new Date,"")
  departments: any= ["HR", "Sales", "Engineer", "Finance", "Others"];
  deptName: any;
  emps:any = "";
  allEmp : Array<any>=[];  
  tempArr : Array<any> = [];

  checkBoxChange(dptname:any){
    if(!this.tempArr.includes(dptname)){
      this.tempArr.push(dptname);
    }
    else{
      const index = this.tempArr.indexOf(dptname);
      if (index > -1) {
        this.tempArr.splice(index, 1);
      }
    }
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.employeeForm);
    this.employeeForm.department=this.tempArr
    this.service.addEmployee(this.employeeForm).subscribe((data: any)=> {
      this.router.navigate([''])
    })
  }

}
