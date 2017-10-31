import { GoogleService } from './../../services/google.service';
import { LibrosService } from './../../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;

  constructor(private googleService: GoogleService) {
    // se crea this.lgoogleService apuntando al objeto sigleton de la clase GoogleService
   }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  btnBuscar() {
    // this.aLibros =
    // this.googleService.buscarLibros(this.sClave);
    this.googleService.getBooks(this.sClave).subscribe(
     (response) => {this.aLibros  = response; },  //funcion acierto
     (error) => {console.log(error)} //funcion error
    );
    this.sClave = '';
  }
}
