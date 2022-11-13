import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeePayrollService } from '../employee-payroll.service';
import { EmployeePayrollModule } from '../employee-payroll/employee-payroll.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: EmployeePayrollService, private router: Router) { }

  employeeList: any;
  id: Number= 0;
  count: Number= 0;

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
  
  update(employeeId: Number, employee: EmployeePayrollModule) {
    console.log(employeeId, employee);
    this.service.updateById(employeeId, employee);
    this.router.navigate(['employee-payroll-form']);
  }

}
