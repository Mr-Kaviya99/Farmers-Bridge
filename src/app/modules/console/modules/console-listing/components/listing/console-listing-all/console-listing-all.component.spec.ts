import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleListingAllComponent } from './console-listing-all.component';

describe('ConsoleListingAllComponent', () => {
  let component: ConsoleListingAllComponent;
  let fixture: ComponentFixture<ConsoleListingAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleListingAllComponent]
    });
    fixture = TestBed.createComponent(ConsoleListingAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
