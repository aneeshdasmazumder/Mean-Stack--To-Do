import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Contact} from './contact';
import 'rxjs/add/operator/map';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ContactService {

  constructor(private http: Http) { }

//retrieving ContactService
getContacts(){
  return this.http.get('http://localhost:3000/api/contacts')
  .map(res => res.json());
}

//Add contact method
addContact(newContact){
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/api/contact', newConatct,{headers:headers})
  .map(res => res.json());
}

//Delete method
deleteContact(id)
{
  return this.http.delete('http://localhost:3000/api/contact', +id);
  .map(res => res.json());
}
}