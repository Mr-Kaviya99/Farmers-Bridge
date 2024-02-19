import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleBuyerPlaygroundComponent } from './wholesale-buyer-playground.component';

describe('WholesaleBuyerPlaygroundComponent', () => {
  let component: WholesaleBuyerPlaygroundComponent;
  let fixture: ComponentFixture<WholesaleBuyerPlaygroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WholesaleBuyerPlaygroundComponent]
    });
    fixture = TestBed.createComponent(WholesaleBuyerPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
