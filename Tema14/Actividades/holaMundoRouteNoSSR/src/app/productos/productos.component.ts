import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  products = [
    { name: 'Monitor', description: 'Monitor 27 pulgadas', price: 150.99, image: '/monitor.avif' },
    { name: 'Pc', description: 'Forgeon Mithril ARGB Mesh Torre ATX Negra', price: 129.99, image: '/torre.jpg' },
    { name: 'Iphone', description: 'Iphone 15 Pro Max', price: 999.99, image: '/iphone.jpg' },
    { name: 'Samsung', description: 'Samsung S24 Ultra', price: 800, image: '/samsumg.jpg' },
    { name: 'Apple Watch', description: 'Apple Watch Ultra', price: 500, image: '/applewatch.jpg' },
    { name: 'Ipad', description: 'Ipad Pro', price: 700, image: '/TABLET.jpg' },
    { name: 'Playstation 5', description: 'Playstation 5 Standard', price: 499.99, image: '/play.jpg' },
    { name: 'Xbox', description: 'Xbox Series X', price: 399.99, image: '/xbox.jpg' }
  ];
}
