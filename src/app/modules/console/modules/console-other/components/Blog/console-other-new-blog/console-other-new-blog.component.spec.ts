import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleOtherNewBlogComponent } from './console-other-new-blog.component';

describe('ConsoleOtherNewBlogComponent', () => {
  let component: ConsoleOtherNewBlogComponent;
  let fixture: ComponentFixture<ConsoleOtherNewBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleOtherNewBlogComponent]
    });
    fixture = TestBed.createComponent(ConsoleOtherNewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
