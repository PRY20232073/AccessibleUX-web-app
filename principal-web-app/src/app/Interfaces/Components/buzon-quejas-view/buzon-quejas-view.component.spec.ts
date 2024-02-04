import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzonQuejasViewComponent } from './buzon-quejas-view.component';

describe('BuzonQuejasViewComponent', () => {
  let component: BuzonQuejasViewComponent;
  let fixture: ComponentFixture<BuzonQuejasViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuzonQuejasViewComponent]
    });
    fixture = TestBed.createComponent(BuzonQuejasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
