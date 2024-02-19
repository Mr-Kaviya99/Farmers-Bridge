import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleGeneralAllUserComponent } from './console-general-all-user.component';

describe('ConsoleGeneralAllUserComponent', () => {
  let component: ConsoleGeneralAllUserComponent;
  let fixture: ComponentFixture<ConsoleGeneralAllUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleGeneralAllUserComponent]
    });
    fixture = TestBed.createComponent(ConsoleGeneralAllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
