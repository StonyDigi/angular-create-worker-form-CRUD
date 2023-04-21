import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private router: Router, public data: DataService){
    this.data.load();
  }
  ngOnInit(): void {
    var dwn = document.getElementById('dwn');
    dwn?.setAttribute('href', 'data:text/json;charset=utf-8,' 
    + encodeURIComponent(JSON.stringify(this.data.people)));
    dwn?.setAttribute('download', 'person.json');
  }

  delete(id: string){
    this.data.people = this.data.people.filter(t => t.id != id);
    this.data.save();
  }

  import(event: any){
    let file : File = event.target?.files[0];
    file.text().then(t => {
      this.data.people = JSON.parse(t);
      console.log(this.data.people);
      this.data.save();
    })
  }


  update(id: string){
    this.router.navigate(['update', id]);
  }
}
