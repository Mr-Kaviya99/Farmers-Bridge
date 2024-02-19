import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerPlaygroundComponent } from './retailer-playground.component';

describe('RetailerPlaygroundComponent', () => {
  let component: RetailerPlaygroundComponent;
  let fixture: ComponentFixture<RetailerPlaygroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerPlaygroundComponent]
    });
    fixture = TestBed.createComponent(RetailerPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
