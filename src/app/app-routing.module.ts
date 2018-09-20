import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Website main pages components
import { AboutComponent }         from './about/about.component';
import { ContactComponent }       from './contact/contact.component';
import { HomeComponent }          from './home/home.component';
import { ProjectsComponent }      from './projects/projects.component';
import { EventsComponent }        from './events/events.component';
import { PublicationsComponent }  from './publications/publications.component';
import { ResourcesComponent }     from './resources/resources.component';
import { TeachingComponent }      from './teaching/teaching.component';

const routes: Routes = [
  { path: '', redirectTo:'Home', pathMatch:'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Events', component: EventsComponent },
  { path: 'Publications', component: PublicationsComponent },
  { path: 'Resources', component: ResourcesComponent },
  { path: 'Teaching', component: TeachingComponent },
  //{ path: '**', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

