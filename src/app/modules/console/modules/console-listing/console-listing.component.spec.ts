import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleListingComponent } from './console-listing.component';

describe('ConsoleListingComponent', () => {
  let component: ConsoleListingComponent;
  let fixture: ComponentFixture<ConsoleListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleListingComponent]
    });
    fixture = TestBed.createComponent(ConsoleListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
