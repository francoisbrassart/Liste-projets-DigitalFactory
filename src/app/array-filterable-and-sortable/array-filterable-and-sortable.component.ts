import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';


@Component({
  selector: 'app-array-filterable-and-sortable',
  templateUrl: './array-filterable-and-sortable.component.html',
  styleUrls: ['./array-filterable-and-sortable.component.css']
})
export class ArrayFilterableAndSortableComponent implements OnInit {
  @Input() projets:any[];
  @Input() headers:any[];
  @Output() sort = new EventEmitter<any[]>();
  @Output() filter = new EventEmitter<any[]>();
  header_ids=[];                  //liste des id des entetes
  sortedBy:[string,number]; 

  constructor() {}

  ngOnInit(): void {
    this.headers.forEach(
      header => {
        this.header_ids.push(header.header_id);
      }
    );  
  }

  onSort(header:string){
    if(this.sortedBy==null){                        //le tableau n'a jamais été trié
        this.sortedBy=[header,1];
    }
    else if(this.sortedBy[0]==header){
        this.sortedBy[1]=this.sortedBy[1]*(-1); //si déja trié par cette entete, inversement du sens
    }
    else{                              
      this.sortedBy=[header,1];                   //sinon on trie dans l'ordre croissant
    }
    this.sort.emit(this.sortedBy);
  }

  onFilter(header:string,filter:string){
    this.filter.emit([header,filter]);
  }
}
