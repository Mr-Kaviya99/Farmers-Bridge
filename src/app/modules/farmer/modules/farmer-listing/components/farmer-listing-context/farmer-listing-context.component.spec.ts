import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerListingContextComponent } from './farmer-listing-context.component';

describe('FarmerListingContextComponent', () => {
  let component: FarmerListingContextComponent;
  let fixture: ComponentFixture<FarmerListingContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerListingContextComponent]
    });
    fixture = TestBed.createComponent(FarmerListingContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
