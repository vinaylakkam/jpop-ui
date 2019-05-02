import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    //this.products = this.productService.getMockProducts();
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data as Product[];
      }
    )
  }
}
