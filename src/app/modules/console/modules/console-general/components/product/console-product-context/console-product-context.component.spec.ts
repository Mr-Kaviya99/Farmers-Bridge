import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleProductContextComponent } from './console-product-context.component';

describe('ConsoleProductContextComponent', () => {
  let component: ConsoleProductContextComponent;
  let fixture: ComponentFixture<ConsoleProductContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleProductContextComponent]
    });
    fixture = TestBed.createComponent(ConsoleProductContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
