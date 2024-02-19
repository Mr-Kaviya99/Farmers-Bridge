import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleGeneralUserContextComponent } from './console-general-user-context.component';

describe('ConsoleGeneralUserContextComponent', () => {
  let component: ConsoleGeneralUserContextComponent;
  let fixture: ComponentFixture<ConsoleGeneralUserContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleGeneralUserContextComponent]
    });
    fixture = TestBed.createComponent(ConsoleGeneralUserContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
