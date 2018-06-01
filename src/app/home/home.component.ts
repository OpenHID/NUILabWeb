import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private _globals: Globals) { }

}