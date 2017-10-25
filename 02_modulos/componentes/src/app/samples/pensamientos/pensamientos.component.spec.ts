import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamientosComponent } from './pensamientos.component';

describe('PensamientosComponent', () => {
  let component: PensamientosComponent;
  let fixture: ComponentFixture<PensamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
