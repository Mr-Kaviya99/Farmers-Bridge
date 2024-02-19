import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleListingContextComponent } from './console-listing-context.component';

describe('ConsoleListingContextComponent', () => {
  let component: ConsoleListingContextComponent;
  let fixture: ComponentFixture<ConsoleListingContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleListingContextComponent]
    });
    fixture = TestBed.createComponent(ConsoleListingContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
