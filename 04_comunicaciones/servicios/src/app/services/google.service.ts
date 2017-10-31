import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Injectable()
export class GoogleService {

  aLibros: Array<string>;

  constructor(private http: Http) { }

  buscarLibros(clave) {
    this.http.get(URL + clave).subscribe(
      (response) => {
        const data = response.json();
        data.items.forEach( element => {
          this.aLibros.push(element.volumeInfo.title); }
        );
      },       // funciono acierto
      (error) => {console.log(error.json()); }        // funcion error
    );
  }

  getBooks(title: string) {
        // devolvemos un observable
        // procesado por el operador map
        return this.http.get(URL + title ).map(
          response => this.extractTitles(response));
      }

      private extractTitles(response: Response) {
        return response.json().items.map(book => book.volumeInfo.title);
      }
}
