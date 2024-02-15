import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleGeneralAllProductsComponent } from './console-general-all-products.component';

describe('ConsoleGeneralAllProductsComponent', () => {
  let component: ConsoleGeneralAllProductsComponent;
  let fixture: ComponentFixture<ConsoleGeneralAllProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleGeneralAllProductsComponent]
    });
    fixture = TestBed.createComponent(ConsoleGeneralAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
