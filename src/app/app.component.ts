import { Component } from '@angular/core';
import { Globals } from './globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _globals: Globals, private _router:Router){}
  
  title = 'app';

  ngOnInit(): void {
    this._router.navigate(['']);
  }
  
}
