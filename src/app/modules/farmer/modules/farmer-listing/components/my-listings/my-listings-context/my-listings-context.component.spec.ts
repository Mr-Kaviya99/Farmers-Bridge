import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListingsContextComponent } from './my-listings-context.component';

describe('MyListingsContextComponent', () => {
  let component: MyListingsContextComponent;
  let fixture: ComponentFixture<MyListingsContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyListingsContextComponent]
    });
    fixture = TestBed.createComponent(MyListingsContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
