import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerDefaultComponent } from './retailer-default.component';

describe('RetailerDefaultComponent', () => {
  let component: RetailerDefaultComponent;
  let fixture: ComponentFixture<RetailerDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerDefaultComponent]
    });
    fixture = TestBed.createComponent(RetailerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
