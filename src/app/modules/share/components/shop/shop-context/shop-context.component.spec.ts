import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopContextComponent } from './shop-context.component';

describe('ShopContextComponent', () => {
  let component: ShopContextComponent;
  let fixture: ComponentFixture<ShopContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopContextComponent]
    });
    fixture = TestBed.createComponent(ShopContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
