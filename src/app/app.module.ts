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


import { PublicationService } from './publications/publication.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    PublicationsComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [PublicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
