import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() MenuOpened = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  projets(){
    this.router.navigate(['projets']);
    this.closeMenu();
  }

  users(){
    this.router.navigate(['users']);
    this.closeMenu();
  }

  openMenu() {
    document.getElementById("myMenu").style.width = "25vw";
    this.MenuOpened.emit(true);
  }
  
  closeMenu() {
    document.getElementById("myMenu").style.width = "0";
    this.MenuOpened.emit(false);
  }

}
