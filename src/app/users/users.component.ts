import { Component, OnInit } from '@angular/core';
import {ReceiveDataService} from '../services/receive-data.service';
import { Subscription } from 'rxjs';
import { ProjetsService } from '../services/projets.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[];
  headers:any[];
  usersSubscription: Subscription;
  constructor(private receiveDataService: ReceiveDataService,private projetsService: ProjetsService) { 
    this.headers=receiveDataService.getHeadersUsers();
    this.usersSubscription = projetsService.data.users.subject.subscribe(
      (users: any[]) => {
        this.users = users;
      }
    );
    projetsService.emit("users");
  }

  ngOnInit(): void {
  }
  onSort(event:any[]){
    this.projetsService.sort("users",event[0],event[1]);
  }

  onFilter(event:any[]){
    this.projetsService.filter("users",event[0],event[1]);
  }

  onSearch(event:string){
    this.projetsService.search("users",event);
  }
}
