import { Component, OnInit } from '@angular/core';
import { PublicationService } from './publication.service';

@Component({
    selector: 'publications',
    templateUrl: './publications.component.html',
    styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
    publications;
    index = 0;
    

    constructor(private _PubService:PublicationService) {

        this.publications = _PubService.getPublication();
        this.index = 0;
        
        //console.log("After Constructor");
        
        //console.log(this.publications);
        //console.log(this.publications.RefereedJournals);
        //console.log(this.publications.RefereedConferences);
        
    }

    //ngOnInit(){
    //  this.getPublications();
    //}

    //private getPublications(){
    //  this._PubService.getPublications()
    //  .subscribe(publications => this.publications = publications);
    //}

    private IncreseCounter(){
      this.index++;
    }

    public getCounter(){
      this.IncreseCounter();
      return this.index;
    }
    
}