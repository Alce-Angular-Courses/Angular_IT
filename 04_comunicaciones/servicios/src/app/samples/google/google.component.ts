import { element } from 'protractor';

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;

  constructor(private http: Http) {
   }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  btnBuscar() {
    // this.aLibros = this.librosService.buscarLibros(this.sClave);
    this.http.get(URL + this.sClave).subscribe(
      (response) => {
        const data = response.json();
        data.items.forEach( element => {
          this.aLibros.push(element.volumeInfo.title); }
        );
      },       // funciono acierto
      (error) => {console.log(error.json()); }        // funcion error
    );
    this.sClave = '';
  }
}
