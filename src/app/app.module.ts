import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Routing Module to redirect pages
import { AppRoutingModule }     from './app-routing.module';

// Site Components
import { AppComponent }           from './app.component';
import { AboutComponent }         from './about/about.component';
import { ContactComponent }       from './contact/contact.component';
import { HomeComponent }          from './home/home.component';
import { ProjectsComponent }      from './projects/projects.component';
import { PublicationsComponent }  from './publications/publications.component';
import { ResourcesComponent }     from './resources/resources.component';
import { MenubarComponent }       from './other/menubar.component';
import { FootbarComponent }       from './other/footbar.component';

import { EmployeeService } from './about/employee.service';
import { PublicationService } from './publications/publication.service';

//Global variables
import { Globals } from './globals';

// Google Maps API
import {AgmCoreModule} from "@agm/core";



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    PublicationsComponent,
    ResourcesComponent,
    MenubarComponent,
    FootbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyDZAsRcQHusi9gsviGBonQeststp3PQgDc '
    })
  ],
  providers: [
    EmployeeService,
    PublicationService, 
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
