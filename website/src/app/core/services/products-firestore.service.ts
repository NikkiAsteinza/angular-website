import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';

import { Firestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { CartProductI } from '../interfaces/cart-product-interface';
import { Observable } from 'rxjs';

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
    }) as Observable<CartProductI[]>;
  }

  get(id: string) {
    const pokemonDocumentReference = doc(this.firestore, `products/${id}`);
    return docData(pokemonDocumentReference, { idField: 'id' });
  }

  create(pokemon: CartProductI) {
    return addDoc(this.pokemonCollection, pokemon);
  }

  update(pokemon: CartProductI) {
    const pokemonDocumentReference = doc(
      this.firestore,
      `products/${pokemon.id}`
    );
    return updateDoc(pokemonDocumentReference, { ...pokemon });
  }

  delete(id: string) {
    const pokemonDocumentReference = doc(this.firestore, `products/${id}`);
    return deleteDoc(pokemonDocumentReference);
  }
}
