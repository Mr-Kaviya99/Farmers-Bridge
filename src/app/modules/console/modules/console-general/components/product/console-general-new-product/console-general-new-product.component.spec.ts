import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleGeneralNewProductComponent } from './console-general-new-product.component';

describe('ConsoleGeneralNewProductComponent', () => {
  let component: ConsoleGeneralNewProductComponent;
  let fixture: ComponentFixture<ConsoleGeneralNewProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleGeneralNewProductComponent]
    });
    fixture = TestBed.createComponent(ConsoleGeneralNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
