import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleBuyerListingContextComponent } from './wholesale-buyer-listing-context.component';

describe('WholesaleBuyerListingContextComponent', () => {
  let component: WholesaleBuyerListingContextComponent;
  let fixture: ComponentFixture<WholesaleBuyerListingContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WholesaleBuyerListingContextComponent]
    });
    fixture = TestBed.createComponent(WholesaleBuyerListingContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
