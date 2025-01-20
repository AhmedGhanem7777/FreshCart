import { Component, HostListener, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/products/product.service';
import { Category } from '../../../../core/models/product.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = []; // Array to hold the categories
  isLoading: boolean = true // Boolean to track loading state

  constructor(private _ProductService: ProductService) { }

  ngOnInit(): void {
    // Fetch all categories when the component initializes
    this.getAllCategories()
  }

  // Fetches all categories from the ProductService
  getAllCategories() {
    this._ProductService.getCategories().subscribe({
      next: (resopnse) => {
        this.categories = resopnse.data // Update the categories array with the received data
        this.isLoading = false // Update loading state to false
      },
      error: (err) => {
        this.isLoading = false // Update loading state to false
      },
    });
  }
}
