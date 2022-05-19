import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageProductComponent } from './main-page-product.component';

describe('MainPageProductComponent', () => {
  let component: MainPageProductComponent;
  let fixture: ComponentFixture<MainPageProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
