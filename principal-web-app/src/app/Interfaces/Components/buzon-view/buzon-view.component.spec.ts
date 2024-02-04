import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzonViewComponent } from './buzon-view.component';

describe('BuzonViewComponent', () => {
  let component: BuzonViewComponent;
  let fixture: ComponentFixture<BuzonViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuzonViewComponent]
    });
    fixture = TestBed.createComponent(BuzonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
