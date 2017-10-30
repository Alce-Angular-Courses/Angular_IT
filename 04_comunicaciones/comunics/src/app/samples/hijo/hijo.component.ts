import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombre: string;
  @Output() eventBorrar = new EventEmitter<string>();
  nombreSelect: string;

  constructor() {
    // this.eventBorrar = new EventEmitter();
  }

  ngOnInit() {
  }

  btnBorrar() {
    this.nombre = this.nombreSelect;
    this.eventBorrar.emit(this.nombreSelect);
  }
}
