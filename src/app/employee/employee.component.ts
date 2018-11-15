import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../Employee';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: IEmployee[];


  constructor(private _employeeService: EmployeeService) {

   }

  ngOnInit() {
     this._employeeService.getEmployees()
                        .subscribe(e => this.employees = e)
  }

}
