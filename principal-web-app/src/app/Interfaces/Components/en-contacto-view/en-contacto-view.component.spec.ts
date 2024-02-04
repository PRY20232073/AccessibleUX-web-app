import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnContactoViewComponent } from './en-contacto-view.component';

describe('EnContactoViewComponent', () => {
  let component: EnContactoViewComponent;
  let fixture: ComponentFixture<EnContactoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnContactoViewComponent]
    });
    fixture = TestBed.createComponent(EnContactoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
