import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsSelectPopUpComponent } from './keywords-select-pop-up.component';

describe('KeywordsSelectPopUpComponent', () => {
  let component: KeywordsSelectPopUpComponent;
  let fixture: ComponentFixture<KeywordsSelectPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordsSelectPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordsSelectPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
