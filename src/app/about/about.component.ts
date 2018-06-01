import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent  {
    constructor( private _globals: Globals) { }
}