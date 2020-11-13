import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-cap',
  templateUrl: './header-cap.component.html',
  styleUrls: ['./header-cap.component.css']
})
export class HeaderCapComponent implements OnInit {
  @Output() MenuOpened = new EventEmitter<boolean>();
  title = 'Liste des projets de la Digital Factory';
  
  constructor() { }

  ngOnInit(): void {
  }

  onMenuOpened(event:boolean){
    this.MenuOpened.emit(event);
  }
}
