import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionesViewComponent } from './ubicaciones-view.component';

describe('UbicacionesViewComponent', () => {
  let component: UbicacionesViewComponent;
  let fixture: ComponentFixture<UbicacionesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UbicacionesViewComponent]
    });
    fixture = TestBed.createComponent(UbicacionesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
