import { Component } from '@angular/core';
import { EmployeeForm } from './employee-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Payroll';
  employeeModel = new EmployeeForm("","","",[],200000,new Date,"");
}
