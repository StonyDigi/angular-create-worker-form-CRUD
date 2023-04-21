import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  people: Array<Person> = new Array<Person>();
  
  save(){
    let jsonData = JSON.stringify(this.people);
    localStorage.setItem('people', jsonData);
  }

  load(){
    let jsonData = localStorage.getItem('people');
    if (jsonData != null){
      this.people = JSON.parse(jsonData);
    }
  }
}