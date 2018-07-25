import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
    selector: 'footbar',
    templateUrl: './footbar.component.html',
    styleUrls: ['./footbar.component.css']
})
export class FootbarComponent {
    constructor(public _globals: Globals) { }
}
