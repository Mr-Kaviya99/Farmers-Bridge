import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleBuyerBodyComponent } from './wholesale-buyer-body.component';

describe('WholesaleBuyerBodyComponent', () => {
  let component: WholesaleBuyerBodyComponent;
  let fixture: ComponentFixture<WholesaleBuyerBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WholesaleBuyerBodyComponent]
    });
    fixture = TestBed.createComponent(WholesaleBuyerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
