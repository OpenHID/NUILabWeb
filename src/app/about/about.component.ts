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
    former;
    constructor( private _globals: Globals, private _EmpService:EmployeeService) { 
        this.employees = _EmpService.getEmployees();
        if (this.employees != null)
        {
            if(this.employees.faculty != null)
            {
                this.faculty = this.employees.Faculty;
            }
            if(this.employees.current != null)
            {
                this.current = this.employees.Current;
            }
            if(this.employees.former != null)
            {
                this.former = this.employees.Former;
            }
        }

        console.log(this.employees);

        this.faculty = this.employees.Faculty;
        this.current = this.employees.Current;
        this.former = this.employees.Former;

        console.log("Faculty");
        console.log(this.faculty);
        console.log("Current");
        console.log(this.current);
        console.log("Former");
        console.log(this.former);

    }
}