import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Website main pages components
import { AboutComponent }         from './about/about.component';
import { ContactComponent }       from './contact/contact.component';
import { HomeComponent }          from './home/home.component';
import { ProjectsComponent }      from './projects/projects.component';
import { PublicationsComponent }  from './publications/publications.component';
import { ResourcesComponent }     from './resources/resources.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Publications', component: PublicationsComponent },
  { path: 'Resources', component: ResourcesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

