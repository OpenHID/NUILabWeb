import { Component, OnInit } from '@angular/core';
import { TeachService } from './teaching.service';

@Component({
    selector: 'teaching',
    templateUrl: './teaching.component.html',
    styleUrls: ['./teaching.component.css']
})
export class TeachingComponent {
    myClasses;

    constructor(private _classes:TeachService) { 
        this.myClasses = _classes.getClasses();
        console.log(this.myClasses);
    }
}
