import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercice1FrancoisBrassart';

  onMenuOpened(event:boolean){
    if(event)
    {
      document.getElementById("main").style.marginLeft = "calc(25vw+10px)";
      document.getElementById("main").style.filter="blur(2px)";
    }
    else{
      document.getElementById("main").style.marginLeft = "0px";
      document.getElementById("main").style.backgroundColor = "";
      document.getElementById("main").style.filter="";
    }
  }
}
