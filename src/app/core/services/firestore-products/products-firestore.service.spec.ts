import { TestBed } from '@angular/core/testing';

import { ProductsFirestoreService } from './products-firestore.service';

describe('ProductsFirestoreService', () => {
  let service: ProductsFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
