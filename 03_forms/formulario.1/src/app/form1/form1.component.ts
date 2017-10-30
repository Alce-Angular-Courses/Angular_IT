import { Component, OnInit, ViewChild } from '@angular/core';

interface Usuario {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface Departamento {
  nombre: string;
  codigo: string | number;
}

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  user: Usuario;
  impresoraSeleccionada: string;
  aImpresoras: Array<string>;
  isClaro: boolean;
  isColor: boolean;
  departamentoSeleccionado: Departamento;
  aDepartamentos: Array<Departamento>;
  @ViewChild('myform') formLocal: any;

  constructor() { }

  ngOnInit() {
    this.user = { firstName: '', lastName: '',  phoneNumber: ''};
    this.aImpresoras = ['HP', 'Cannon', 'Brother', 'Lexmark'];
    this.aDepartamentos = [
       {nombre: 'Marketing', codigo: 22},
       {nombre: 'Ventas', codigo: 23},
       {nombre: 'Direccion', codigo: '26t'},
       {nombre: 'Sistemas', codigo: 28}
    ]
  }

  avisarPrint() {
    console.log(this.isColor);
  }

  avisarDepartamento () {
    console.log(this.departamentoSeleccionado);
  }

  enviar () {
    console.log(this.formLocal);
  }

  borrar () {
    this.formLocal.reset();
    console.log('Borrado');
  }
}
