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
        
    }

    private IncreseCounter(){
      this.index++;
    }

    public getCounter(){
      this.IncreseCounter();
      return this.index;
    }
    
}