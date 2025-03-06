import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../core/firebase.service';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  newItem: string = '';

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    // Escuchar cambios en la colección
    this.firebaseService.getItems().subscribe(data => {
      this.items = data;
    });
  }
}

  export class ProductListComponent {
  products: Product[] = [
    { name: 'Producto 1', price: 100 },
    { name: 'Producto 2', price: 200 },
  ];

  newProduct: Product = { name: '', price: 0 };

  addProduct() {
    if (this.newProduct.name.trim() && this.newProduct.price > 0) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', price: 0 };
    }
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }
}
