import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {

  sNombre: string;
  nEdad: number;
  nPrecio: number;
  oDatos;
  dFecha: Date;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
    this.nEdad = 20;
    this.nPrecio = 25;
    this.oDatos =  {
      nombre: 'Pepe',
      apellido : 'Perez'};
    this.dFecha = new Date();
  }

  btnBorrar () {
    this.sNombre = '';
  }
}
