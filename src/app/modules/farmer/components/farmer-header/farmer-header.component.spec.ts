import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerHeaderComponent } from './farmer-header.component';

describe('FarmerHeaderComponent', () => {
  let component: FarmerHeaderComponent;
  let fixture: ComponentFixture<FarmerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerHeaderComponent]
    });
    fixture = TestBed.createComponent(FarmerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
