import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  @ViewChild('name') eName: ElementRef;

  constructor() { }

  ngOnInit() {
    this.eName.nativeElement.value = 'Maria';
  }

}
