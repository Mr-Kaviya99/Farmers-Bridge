import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOrderDetailComponent } from './open-order-detail.component';

describe('OpenOrderDetailComponent', () => {
  let component: OpenOrderDetailComponent;
  let fixture: ComponentFixture<OpenOrderDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenOrderDetailComponent]
    });
    fixture = TestBed.createComponent(OpenOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
