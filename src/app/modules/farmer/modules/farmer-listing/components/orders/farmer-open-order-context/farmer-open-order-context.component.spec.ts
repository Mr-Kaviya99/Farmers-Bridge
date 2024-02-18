import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerOpenOrderContextComponent } from './farmer-open-order-context.component';

describe('FarmerOpenOrderContextComponent', () => {
  let component: FarmerOpenOrderContextComponent;
  let fixture: ComponentFixture<FarmerOpenOrderContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerOpenOrderContextComponent]
    });
    fixture = TestBed.createComponent(FarmerOpenOrderContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
