import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductViewComponent } from './shop-product-view.component';

describe('ShopProductViewComponent', () => {
  let component: ShopProductViewComponent;
  let fixture: ComponentFixture<ShopProductViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopProductViewComponent]
    });
    fixture = TestBed.createComponent(ShopProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
