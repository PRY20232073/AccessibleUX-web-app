import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCitaViewComponent } from './crear-cita-view.component';

describe('CrearCitaViewComponent', () => {
  let component: CrearCitaViewComponent;
  let fixture: ComponentFixture<CrearCitaViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCitaViewComponent]
    });
    fixture = TestBed.createComponent(CrearCitaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
