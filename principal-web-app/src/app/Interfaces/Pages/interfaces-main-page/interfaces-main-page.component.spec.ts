import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacesMainPageComponent } from './interfaces-main-page.component';

describe('InterfacesMainPageComponent', () => {
  let component: InterfacesMainPageComponent;
  let fixture: ComponentFixture<InterfacesMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfacesMainPageComponent]
    });
    fixture = TestBed.createComponent(InterfacesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
