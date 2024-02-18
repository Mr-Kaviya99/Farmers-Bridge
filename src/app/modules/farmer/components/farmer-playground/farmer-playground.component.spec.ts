import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerPlaygroundComponent } from './farmer-playground.component';

describe('FarmerPlaygroundComponent', () => {
  let component: FarmerPlaygroundComponent;
  let fixture: ComponentFixture<FarmerPlaygroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerPlaygroundComponent]
    });
    fixture = TestBed.createComponent(FarmerPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
