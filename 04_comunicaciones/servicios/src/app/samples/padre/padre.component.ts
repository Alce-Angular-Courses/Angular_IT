import { LibrosService } from './../../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;

  constructor(private librosService: LibrosService) {
    // se crea this.librosService apuntando al objeto sigleton de la clase LibrosService
   }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  btnBuscar() {
    this.aLibros = this.librosService.buscarLibros(this.sClave);
    this.sClave = '';
  }
}
