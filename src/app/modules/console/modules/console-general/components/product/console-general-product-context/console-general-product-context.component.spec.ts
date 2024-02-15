import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleGeneralProductContextComponent } from './console-general-product-context.component';

describe('ConsoleGeneralProductContextComponent', () => {
  let component: ConsoleGeneralProductContextComponent;
  let fixture: ComponentFixture<ConsoleGeneralProductContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleGeneralProductContextComponent]
    });
    fixture = TestBed.createComponent(ConsoleGeneralProductContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
