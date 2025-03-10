import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  addItem(product: any) {
    const itemsCollection = collection(this.firestore, 'products');
    return addDoc(itemsCollection, product);
  }

  getItems(): Observable<any[]> {
    const itemsCollection = collection(this.firestore, 'products');
    return collectionData(itemsCollection, { idField: 'id' }) as Observable<any[]>
  }
}
