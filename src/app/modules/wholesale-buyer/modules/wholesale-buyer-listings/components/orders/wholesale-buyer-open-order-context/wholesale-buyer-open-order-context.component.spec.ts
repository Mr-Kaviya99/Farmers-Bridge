import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleBuyerOpenOrderContextComponent } from './wholesale-buyer-open-order-context.component';

describe('WholesaleBuyerOpenOrderContextComponent', () => {
  let component: WholesaleBuyerOpenOrderContextComponent;
  let fixture: ComponentFixture<WholesaleBuyerOpenOrderContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WholesaleBuyerOpenOrderContextComponent]
    });
    fixture = TestBed.createComponent(WholesaleBuyerOpenOrderContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
