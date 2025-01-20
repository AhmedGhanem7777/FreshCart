import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/products/product.service';
import { Product } from '../../../../core/models/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  allProducts: Product[] = []; // Array to hold fetched products
  isLoading: boolean = true // Flag to indicate loading state

  constructor(private _ProductService: ProductService) { }

  ngOnInit(): void {
    // Fetch products when the component initializes
    this.getLimitProducts();
  }

  // Method to fetch a limited number of products from the API
  getLimitProducts(): void {
    this._ProductService.getLimitProducts().subscribe({
      next: (response) => {
        this.allProducts = response.data; // Assign fetched products to allProducts
        this.isLoading = false // Set loading state to false
      },
      error: (err) => {
        this.isLoading = false // Ensure loading state is false in case of error
      }
    });
  }
}
