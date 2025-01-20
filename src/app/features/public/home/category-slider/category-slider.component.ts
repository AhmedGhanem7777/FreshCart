import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/products/product.service';
import { Category } from '../../../../core/models/product.interface';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.scss'
})
export class CategorySliderComponent implements OnInit {

  categories: Category[] = []; // Array to store categories for the slider

  constructor(private _ProductService: ProductService) { }

  ngOnInit(): void {
    // Fetch categories when the component initializes
    this.getSliderCategories();
  }

  // Fetch categories from the ProductService
  getSliderCategories(): void {
    this._ProductService.getCategories().subscribe({
      next: (response) => {
        // Assign the fetched categories to the component property
        this.categories = response.data;
      }
    });
  }

  // Configuration options for the Owl Carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    },
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  }
}
