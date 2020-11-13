import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../services/projets.service';
import {ReceiveDataService} from '../services/receive-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  projets:any[];
  projetsSubscription: Subscription;
  headers:any[];

  constructor(private projetsService: ProjetsService, private receiveDataService: ReceiveDataService){
    //Récupération des projets
    this.projetsSubscription = projetsService.data.projets.subject.subscribe(
      (projets: any[]) => {
        this.projets = projets;
      }
    );
    projetsService.emit("projets");
    //Récupération des entêtes
    this.headers=receiveDataService.getHeaders();
  }
  ngOnInit(){}

  onSort(event: any[]){
    this.projetsService.sort("projets",event[0],event[1]);
  }

  onFilter(event:any[]){
    this.projetsService.filter("projets",event[0],event[1]);
  }

  onSearch(event:string){
    this.projetsService.search("projets",event);
  }
  
}
