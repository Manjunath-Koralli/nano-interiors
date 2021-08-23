import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientNameService {

  clientName : string = '';
  constructor() { }

  setClientName(clientName : string) {
    this.clientName = clientName;
  }

  getClientName() {
    return this.clientName;
  }
  
}
