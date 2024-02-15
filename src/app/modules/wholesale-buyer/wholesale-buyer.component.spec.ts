import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleBuyerComponent } from './wholesale-buyer.component';

describe('WholesaleBuyerComponent', () => {
  let component: WholesaleBuyerComponent;
  let fixture: ComponentFixture<WholesaleBuyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WholesaleBuyerComponent]
    });
    fixture = TestBed.createComponent(WholesaleBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
