import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  actualPerson: Person = new Person();
  //ActivatedRoute az url címet reprezentálja és ki tudjuk belőle szedni az adatokat amire nekünk szükségünk van
  constructor(private route: ActivatedRoute, private router: Router, public data: DataService) {
    route.params.subscribe(t => {
      //t = key.value dictionary
      this.data.load();
      this.actualPerson = this.data.people.filter(z => z.id == t['id'])[0];
      //az actualPerson legyen egyenlő azzal, hogy az emberek tömbjéből kifilterezzük akinek az id-ja egyenlő a paraméterül kapott id-val, tömböt ad vissza viszont biztosra tudjuk, hogy 1 elemű , mert egy embernek csak 1 id-ja lehet és a 0-dik elemét akarjuk beletölteni
    })
  }

  keyPress(event: any) {
    if(event == 'Enter') {
      this.save();
    }
  }
  ngOnInit(): void {
    document.getElementsByTagName('input')[0].focus();
  }

  save() {
    this.data.save();
    this.router.navigate(['list']);
  }

}
