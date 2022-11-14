import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeForm } from '../employee-form';
import { EmployeePayrollService } from '../employee-payroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: EmployeePayrollService, private router: Router) { }

  employeeForm: EmployeeForm= new EmployeeForm("","","",[],200000,new Date,"")

  employeeList: any;
  count: Number= 0;
  id: Number= 0;

  ngOnInit(): void {
    this.service.getAllEmployee().subscribe((data:any)=> {
      console.log(data);
      this.employeeList= Object(data)["data"];
    })
  }

  delete(id: Number) {
    console.log(id);
    this.service.deleteById(id).subscribe((data:any)=> {
      console.log(data);
      this.ngOnInit();
    })
  }
  
  update(employeeId: Number, employee: EmployeeForm) {
    console.log(employeeId, employee);
    this.service.update(employeeId, employee);
    this.router.navigate(['employee-payroll-form']);
  }

}
