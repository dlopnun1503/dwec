import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../core/firebase.service';

interface Product {
  name: string;
  price: number;
  url: string;
}

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  products: Product[] = [];
  newProduct: Product = { name: '', price: 0, url: '' };

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    // Escuchar cambios en la colección
    this.firebaseService.getItems().subscribe(data => {
      this.products = data;
    });
  }

  addProduct() {
    if (this.newProduct.name.trim() && this.newProduct.price > 0) {
      this.firebaseService.addItem(this.newProduct).then(() => {
        this.newProduct = { name: '', price: 0, url: '' };
      }).catch(error => {
        console.error('Error adding product: ', error);
      });
    }
  }
}
