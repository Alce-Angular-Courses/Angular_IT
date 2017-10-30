import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  aDatos: Array<string>;

  constructor() {
    this.aDatos = [
      'Angular Avanzado',
      'Aprendiendo Angular',
      'Angular Ninja',
      'Angular para torpes'
    ];
  }

 buscarLibros(clave: string) {
   return this.aDatos;
 }

}
