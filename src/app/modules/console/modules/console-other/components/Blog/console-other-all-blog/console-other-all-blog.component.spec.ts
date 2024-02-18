import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleOtherAllBlogComponent } from './console-other-all-blog.component';

describe('ConsoleOtherAllBlogComponent', () => {
  let component: ConsoleOtherAllBlogComponent;
  let fixture: ComponentFixture<ConsoleOtherAllBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleOtherAllBlogComponent]
    });
    fixture = TestBed.createComponent(ConsoleOtherAllBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
