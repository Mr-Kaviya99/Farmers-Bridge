import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleBuyerDefaultComponent } from './wholesale-buyer-default.component';

describe('WholesaleBuyerDefaultComponent', () => {
  let component: WholesaleBuyerDefaultComponent;
  let fixture: ComponentFixture<WholesaleBuyerDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WholesaleBuyerDefaultComponent]
    });
    fixture = TestBed.createComponent(WholesaleBuyerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
