import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleBuyerHeaderComponent } from './wholesale-buyer-header.component';

describe('WholesaleBuyerHeaderComponent', () => {
  let component: WholesaleBuyerHeaderComponent;
  let fixture: ComponentFixture<WholesaleBuyerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WholesaleBuyerHeaderComponent]
    });
    fixture = TestBed.createComponent(WholesaleBuyerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
