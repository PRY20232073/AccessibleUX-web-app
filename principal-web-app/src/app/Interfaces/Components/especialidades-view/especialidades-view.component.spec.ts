import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesViewComponent } from './especialidades-view.component';

describe('EspecialidadesViewComponent', () => {
  let component: EspecialidadesViewComponent;
  let fixture: ComponentFixture<EspecialidadesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadesViewComponent]
    });
    fixture = TestBed.createComponent(EspecialidadesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
