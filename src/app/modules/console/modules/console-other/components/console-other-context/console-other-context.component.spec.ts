import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleOtherContextComponent } from './console-other-context.component';

describe('ConsoleOtherContextComponent', () => {
  let component: ConsoleOtherContextComponent;
  let fixture: ComponentFixture<ConsoleOtherContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleOtherContextComponent]
    });
    fixture = TestBed.createComponent(ConsoleOtherContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
