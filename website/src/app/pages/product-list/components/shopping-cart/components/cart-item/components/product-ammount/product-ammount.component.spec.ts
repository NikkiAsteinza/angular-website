import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAmmountComponent } from './product-ammount.component';

describe('ProductAmmountComponent', () => {
  let component: ProductAmmountComponent;
  let fixture: ComponentFixture<ProductAmmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAmmountComponent]
    });
    fixture = TestBed.createComponent(ProductAmmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
