import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBodyComponent } from './farmer-body.component';

describe('FarmerBodyComponent', () => {
  let component: FarmerBodyComponent;
  let fixture: ComponentFixture<FarmerBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerBodyComponent]
    });
    fixture = TestBed.createComponent(FarmerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
