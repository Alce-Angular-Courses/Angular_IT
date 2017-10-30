import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  public formGroup1: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.formGroup1 = this.formBuilder.group({

  });
  


  enviar () {
  }

  borrar () {
  }
}
