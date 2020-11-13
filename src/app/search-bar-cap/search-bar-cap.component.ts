import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-bar-cap',
  templateUrl: './search-bar-cap.component.html',
  styleUrls: ['./search-bar-cap.component.css']
})
export class SearchBarCapComponent implements OnInit {
  placeholder='Saisissez votre recherche...';

  @Output() search=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}
  
  onChangeInput(event: any){
    this.search.emit(event.target.value)
  }
}
