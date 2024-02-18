import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerProductContextComponent } from './farmer-product-context.component';

describe('FarmerProductContextComponent', () => {
  let component: FarmerProductContextComponent;
  let fixture: ComponentFixture<FarmerProductContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerProductContextComponent]
    });
    fixture = TestBed.createComponent(FarmerProductContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
