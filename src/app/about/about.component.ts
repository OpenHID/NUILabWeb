import { Component } from '@angular/core';
import { Globals } from '../globals';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent  {
    employees;
    faculty;
    current;
    oldStudents;
    constructor( private _globals: Globals, private _EmpService:EmployeeService) { 
        this.employees = _EmpService.getEmployees();
        if (this.employees != null)
        {
            if(this.employees.Faculty != null)
            {
                this.faculty = this.employees.Faculty;
            }
            if(this.employees.Current != null)
            {
                this.current = this.employees.Current;
            }
            if(this.employees.Former != null)
            {
                this.oldStudents = this.employees.Former;
            }
        }
    }
}