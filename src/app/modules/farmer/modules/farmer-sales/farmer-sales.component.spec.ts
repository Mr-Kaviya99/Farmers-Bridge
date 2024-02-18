import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSalesComponent } from './farmer-sales.component';

describe('FarmerSalesComponent', () => {
  let component: FarmerSalesComponent;
  let fixture: ComponentFixture<FarmerSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerSalesComponent]
    });
    fixture = TestBed.createComponent(FarmerSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
