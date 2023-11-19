import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageGuidelinesComponent } from './main-page-guidelines.component';

describe('MainPageGuidelinesComponent', () => {
  let component: MainPageGuidelinesComponent;
  let fixture: ComponentFixture<MainPageGuidelinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageGuidelinesComponent]
    });
    fixture = TestBed.createComponent(MainPageGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
