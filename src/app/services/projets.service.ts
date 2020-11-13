import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { ReceiveDataService } from './receive-data.service';
import {Data} from '../models/data.model';


@Injectable()
export class ProjetsService {
    public data={
        "projets": new Data([],[],["",""],["",null],new Subject<any[]>()),
        "users": new Data([],[],["",""],["",null],new Subject<any[]>()),
    }


    constructor(private receiveDataService: ReceiveDataService) {
        this.data.projets.not_filtered=this.receiveDataService.getProjets();
        this.data.users.not_filtered=this.receiveDataService.getUsers();
    }  

    emit(dataSelect:string){
        this.data[dataSelect].subject.next(this.data[dataSelect].not_filtered);
    }

    //-------------------------------
    // Fonction qui trie les projets en fonction de l'entete et d'un ordre
    // Paramètres : * header : entete pour le tri
    //              * order : ordre du tri (1 pour croissant, -1 pour décroissant)
    //--------------------------------
    sort(dataSelect:string, header:string,order:number){
        this.data[dataSelect].sortedBy=[header,order];
        var tab;
        if(this.data[dataSelect].filteredBy[0]==""){
            tab=this.data[dataSelect].not_filtered;
        }
        else{
           tab=this.data[dataSelect].filtered;
        }
        tab.sort(function(a, b) {
            if(a[header]>b[header])
                return 1*order;
            else if (a[header]<b[header])
                return -1*order;
             else
                return 0;
        });
    }

    //-------------------------------
    // Fonction qui filtre les projets en fonction d'une valeur dans une colonne
    // Paramètres : * header : entete correspondant à la colonne filtrée
    //              * param : chaine correspondant à la valeur filtrée
    //--------------------------------
    filter(dataSelect:string,header:string,param:string){                 
        this.data[dataSelect].filteredBy[1]=param;        
        if(param != "Toutes" && param != "Tout")           //On filtre sauf si on veut tout afficher
        {
            this.data[dataSelect].filteredBy[0]=header;
            this.data[dataSelect].filtered=[];
            this.data[dataSelect].not_filtered.forEach(
                item => {
                    if(item[header].toString().toLowerCase() ===param.toString().toLowerCase())
                        {
                            this.data[dataSelect].filtered.push(item);
                        }
                });
                this.data[dataSelect].subject.next(this.data[dataSelect].filtered);
        }
        else
        {
            this.data[dataSelect].filteredBy[0]="";
            this.data[dataSelect].filtered=[];
            this.emit(dataSelect); 
        }

        if(this.data[dataSelect].sortedBy[0]!=null)
            this.sort(dataSelect,this.data[dataSelect].sortedBy[0],this.data[dataSelect].sortedBy[1]);
    }

    //-------------------------------
    // Fonction de recherche qui passe le paramètre 'selected' du projet à 1 si la valeur recherchée est incluse dans le projet
    // Paramètres : * searchedString : chaine recherchée
    //--------------------------------
    search(dataSelected:string,searchedString: string){ 
        this.data[dataSelected].not_filtered.forEach(
            item => {
                item.selected=0;
                if(searchedString!="")
                {
                    for (const property in item){
                        if(!Array.isArray(item[property]))
                              {
                                  if(item[property].toString().toLowerCase().includes(searchedString.toString().toLowerCase()))
                                  {
                                    item.selected=1;
                                  }
                              }
                        else 
                          {
                            item[property].forEach(
                                property => {
                                    if(property.toString().toLowerCase().includes(searchedString.toString().toLowerCase()))
                                    item.selected=1;
                                }
                            )  
                          }
                      }
                }
                
            }
        );
        if(this.data[dataSelected].filteredBy[0]!="")
            this.filter(dataSelected,this.data[dataSelected].filteredBy[0],this.data[dataSelected].filteredBy[1]);           //permet de reprendre le filtre utilisé avant la recherche et d'emettre la liste
    }
}
