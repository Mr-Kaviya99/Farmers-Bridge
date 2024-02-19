import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleBuyerListingsComponent } from './wholesale-buyer-listings.component';

describe('WholesaleBuyerListingsComponent', () => {
  let component: WholesaleBuyerListingsComponent;
  let fixture: ComponentFixture<WholesaleBuyerListingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WholesaleBuyerListingsComponent]
    });
    fixture = TestBed.createComponent(WholesaleBuyerListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
