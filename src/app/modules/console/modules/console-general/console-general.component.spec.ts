import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleGeneralComponent } from './console-general.component';

describe('ConsoleGeneralComponent', () => {
  let component: ConsoleGeneralComponent;
  let fixture: ComponentFixture<ConsoleGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleGeneralComponent]
    });
    fixture = TestBed.createComponent(ConsoleGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
