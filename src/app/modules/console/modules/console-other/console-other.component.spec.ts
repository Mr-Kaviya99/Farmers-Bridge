import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleOtherComponent } from './console-other.component';

describe('ConsoleOtherComponent', () => {
  let component: ConsoleOtherComponent;
  let fixture: ComponentFixture<ConsoleOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleOtherComponent]
    });
    fixture = TestBed.createComponent(ConsoleOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
