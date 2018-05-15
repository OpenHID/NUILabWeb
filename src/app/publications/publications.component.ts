import { Component } from '@angular/core';
import { PublicationService } from './publication.service';

@Component({
    selector: 'publications',
    templateUrl: './publications.component.html',
    styleUrls: ['./publications.component.css']
})
export class PublicationsComponent  {
    publications;
    
    constructor(private _PubService:PublicationService) {

        this.publications = _PubService.getPublication();
        
        console.log("After Constructor");
        
        console.log(this.publications);
        console.log(this.publications.RefereedJournals);
        console.log(this.publications.RefereedConferences);
        
    }
    
    
}