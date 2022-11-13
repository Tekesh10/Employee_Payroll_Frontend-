import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeePayrollService {

  constructor(private http: HttpClient) { }

  addEmployee(employee: any) {
    return this.http.post("http://localhost:8080/employeePayrollService/create", employee);
  }

  getAllEmployee() {
    return this.http.get("http://localhost:8080/employeePayrollService/getAll");
  }

  deleteById(id: Number) {
    return this.http.delete("http://localhost:8080/employeePayrollService/delete/"+id);
  }

  updateById(id: Number, employee: any) {
    return this.http.put("http://localhost:8080/employeePayrollService/update/"+id, employee)
  }
}
