import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleListingBidListingContextComponent } from './console-listing-bid-listing-context.component';

describe('ConsoleListingBidListingContextComponent', () => {
  let component: ConsoleListingBidListingContextComponent;
  let fixture: ComponentFixture<ConsoleListingBidListingContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleListingBidListingContextComponent]
    });
    fixture = TestBed.createComponent(ConsoleListingBidListingContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
