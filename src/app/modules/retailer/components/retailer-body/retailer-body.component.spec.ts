import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerBodyComponent } from './retailer-body.component';

describe('RetailerBodyComponent', () => {
  let component: RetailerBodyComponent;
  let fixture: ComponentFixture<RetailerBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerBodyComponent]
    });
    fixture = TestBed.createComponent(RetailerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
