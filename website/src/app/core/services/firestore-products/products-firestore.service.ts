import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductI } from '../../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsFirestoreService {
  private productCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.productCollection = collection(this.firestore, 'products`');
  }

  getAll() {
    return collectionData(this.productCollection, {
      idField: 'id',
    }) as Observable<ProductI[]>;
  }

  get(id: string) {
    const productDocumentReference = doc(this.firestore, `products/${id}`);
    return docData(productDocumentReference, { idField: 'id' });
  }

  create(product: ProductI) {
    return addDoc(this.productCollection, product);
  }

  update(product: ProductI) {
    const productDocumentReference = doc(
      this.firestore,
      `products/${product.id}`
    );
    return updateDoc(productDocumentReference, { ...product });
  }

  delete(id: string) {
    const productDocumentReference = doc(this.firestore, `products/${id}`);
    return deleteDoc(productDocumentReference);
  }
}