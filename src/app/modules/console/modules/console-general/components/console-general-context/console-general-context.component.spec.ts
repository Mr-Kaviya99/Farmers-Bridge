import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleGeneralContextComponent } from './console-general-context.component';

describe('ConsoleGeneralContextComponent', () => {
  let component: ConsoleGeneralContextComponent;
  let fixture: ComponentFixture<ConsoleGeneralContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleGeneralContextComponent]
    });
    fixture = TestBed.createComponent(ConsoleGeneralContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
