import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacesPagesComponent } from './interfaces-pages.component';

describe('InterfacesPagesComponent', () => {
  let component: InterfacesPagesComponent;
  let fixture: ComponentFixture<InterfacesPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfacesPagesComponent]
    });
    fixture = TestBed.createComponent(InterfacesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
