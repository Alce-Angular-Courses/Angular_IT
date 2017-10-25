import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamientos',
  templateUrl: './pensamientos.component.html',
  styleUrls: ['./pensamientos.component.css']
})
export class PensamientosComponent implements OnInit {

  sIdea: string;
  aIdeas: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aIdeas = [];
  }

  addIdea() {
    this.aIdeas.push(this.sIdea);
    this.sIdea = '';
  }

}
