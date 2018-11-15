import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IEmployee } from '../Employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EmployeeService {

  constructor(private _http: Http) { }

  getEmployees(): Observable<IEmployee[]> {
    return this._http.get("http://localhost:31920/api/employees")
                        .pipe(map((response: Response) => <IEmployee[]>response.json()));
  }
}
