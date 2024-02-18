import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSalesContextComponent } from './farmer-sales-context.component';

describe('FarmerSalesContextComponent', () => {
  let component: FarmerSalesContextComponent;
  let fixture: ComponentFixture<FarmerSalesContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerSalesContextComponent]
    });
    fixture = TestBed.createComponent(FarmerSalesContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
