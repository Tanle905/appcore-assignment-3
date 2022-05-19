import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCategoryComponent } from './main-page-category.component';

describe('MainPageCategoryComponent', () => {
  let component: MainPageCategoryComponent;
  let fixture: ComponentFixture<MainPageCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
