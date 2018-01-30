import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
