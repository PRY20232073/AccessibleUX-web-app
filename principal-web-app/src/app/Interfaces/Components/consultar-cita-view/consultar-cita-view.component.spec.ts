import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCitaViewComponent } from './consultar-cita-view.component';

describe('ConsultarCitaViewComponent', () => {
  let component: ConsultarCitaViewComponent;
  let fixture: ComponentFixture<ConsultarCitaViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarCitaViewComponent]
    });
    fixture = TestBed.createComponent(ConsultarCitaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
