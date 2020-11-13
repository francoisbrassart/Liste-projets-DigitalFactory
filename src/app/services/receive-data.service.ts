import { Injectable } from '@angular/core';
import header from '../../assets/entetes.json'
import projets from '../../assets/projets.json'
import headerUsers from '../../assets/entetesusers.json'
import Users from '../../assets/users.json'

@Injectable()
export class ReceiveDataService {
  
  constructor() { }

  getHeaders(){
    return header.headers;
  }

  getProjets(){
    return projets["projets DF"];
  }

  getHeadersUsers(){
    return headerUsers.headers;
  }

  getUsers(){
    return Users["users"];
  }
}
