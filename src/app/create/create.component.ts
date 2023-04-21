import { Component, OnInit } from '@angular/core';
import { Person} from '../person';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  actualPerson: Person = new Person();
  // ha kirakjuk a private kulcsszót nem kell a router: Router;

  //Router az az angularos motor ami az útválasztásért felel és ezt lepéldányosítottuk "router" változóba és   ezt szeretném elérni az add() metóduson belül
  //konstruktoron keresztül adjuk át a szervice osztályt
  constructor(private router: Router, private data: DataService){
    this.data.load();
    this.router = router;
    document.getElementById
  }

  keyPress(event: KeyboardEvent) {
    if(event.key == 'Enter') {
      this.add();
    }
  }

  ngOnInit(): void {
    //Az Oninit(lifecycle hook, kicsit kásőbb fut le) akkor fut le amikor már a html elemek lefutottak!!!
    document.getElementsByTagName('input')[0].focus();
  }

  add(){
    this.data.people.push(this.actualPerson.getCopy());
    this.actualPerson = new Person();
    this.data.save();
    this.router.navigate(['list']);
  }
}