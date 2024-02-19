import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerDefaultComponent } from './farmer-default.component';

describe('FarmerDefaultComponent', () => {
  let component: FarmerDefaultComponent;
  let fixture: ComponentFixture<FarmerDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerDefaultComponent]
    });
    fixture = TestBed.createComponent(FarmerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
