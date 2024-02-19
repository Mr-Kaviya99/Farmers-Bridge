import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleOtherBlogContextComponent } from './console-other-blog-context.component';

describe('ConsoleOtherBlogContextComponent', () => {
  let component: ConsoleOtherBlogContextComponent;
  let fixture: ComponentFixture<ConsoleOtherBlogContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleOtherBlogContextComponent]
    });
    fixture = TestBed.createComponent(ConsoleOtherBlogContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
