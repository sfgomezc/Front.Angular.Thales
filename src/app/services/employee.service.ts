import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = 'https://localhost:44394/api/v1/employees';

  employees : Employee[];

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API);
  }
}
