import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeePayrollService {

  constructor(private http: HttpClient) { }

  insertEmployee(employee: any) {
    return this.http.post("http://localhost:8080/employeePayrollService/create",employee);
  }
}
