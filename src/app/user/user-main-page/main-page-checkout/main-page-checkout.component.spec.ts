import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCheckoutComponent } from './main-page-checkout.component';

describe('MainPageCheckoutComponent', () => {
  let component: MainPageCheckoutComponent;
  let fixture: ComponentFixture<MainPageCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
