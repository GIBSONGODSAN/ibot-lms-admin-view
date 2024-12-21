import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service'; // Import CategoriesService

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  productData = {
    product_name: '',
    description: '',
    category: '', // Category will hold the category ID
    price: '',
    make: '',
  };

  categories: any[] = []; // Array to store categories
  productPhoto: File | null = null;
  loading = false;

  constructor(
    private dialogRef: MatDialogRef<ProductformComponent>,
    private productsService: ProductsService,
    private categoriesService: CategoriesService // Inject CategoriesService
  ) {}

  ngOnInit(): void {
    // Fetch categories when component initializes
    this.categoriesService.getCategories().subscribe((response) => {
      this.categories = response.data; // Assuming the response contains categories in 'data'
    });
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.productPhoto = input.files[0];
    }
  }

  onSubmit() {
    if (!this.productPhoto) {
      alert('Please select a product photo.');
      return;
    }
  
    const formData = new FormData();
    formData.append('product_name', this.productData.product_name);
    formData.append('description', this.productData.description);
    formData.append('category', this.productData.category);
    formData.append('price', this.productData.price.toString());
    formData.append('make', this.productData.make);
    formData.append('product_image', this.productPhoto);
  
    // Debugging to check if the file is correctly added
    console.log(formData.get('product_photo'));  // Check if the image file is there
  
    this.loading = true;
    this.productsService.createProduct(formData).subscribe({
      next: () => {
        this.loading = false;
        this.dialogRef.close(true); // Close dialog and pass success flag
      },
      error: (error) => {
        console.error('Error creating product', error);
        this.loading = false;
      },
    });
  }
  
  closeDialog() {
    this.dialogRef.close(false); // Close dialog without submission
  }
}
