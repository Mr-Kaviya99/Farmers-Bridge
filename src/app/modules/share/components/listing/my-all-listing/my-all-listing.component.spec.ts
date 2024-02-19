import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAllListingComponent } from './my-all-listing.component';

describe('MyAllListingComponent', () => {
  let component: MyAllListingComponent;
  let fixture: ComponentFixture<MyAllListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAllListingComponent]
    });
    fixture = TestBed.createComponent(MyAllListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
