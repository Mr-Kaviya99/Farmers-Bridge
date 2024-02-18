import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWinListingComponent } from './my-win-listing.component';

describe('MyWinListingComponent', () => {
  let component: MyWinListingComponent;
  let fixture: ComponentFixture<MyWinListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWinListingComponent]
    });
    fixture = TestBed.createComponent(MyWinListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
