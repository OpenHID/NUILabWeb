import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing Module to redirect pages
import { AppRoutingModule }     from './app-routing.module';

// Site Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
