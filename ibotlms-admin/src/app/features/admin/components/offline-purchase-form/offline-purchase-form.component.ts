import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminserviceService } from '../../services/adminservice.service';

@Component({
  selector: 'app-offline-purchase-form',
  templateUrl: './offline-purchase-form.component.html',
  styleUrls: ['./offline-purchase-form.component.css'],
})
export class OfflinePurchaseFormComponent {
  formData: any = {
    vendor_name: '',
    vendor_contact_name: '',
    vendor_contact_number: '',
    vendor_email: '',
    vendor_address: '',
    customer_name: '',
    customer_contact_name: '',
    customer_contact_number: '',
    customer_email: '',
    customer_address: '',
    payment_term: '',
    order_id: '',
    transaction_number: '',
    product_name: '',
    product_price: null,
    product_quantity: null,
  };

  products: string[] = ['Product A', 'Product B', 'Product C']; // Mock products list

  constructor(private purchaseService: AdminserviceService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.purchaseService.createPurchase(form.value).subscribe(
        (response) => {
          console.log('Purchase created successfully', response);
          alert('Purchase created successfully!');
          form.resetForm(); // Clear form after submission
        },
        (error) => {
          console.error('Error creating purchase', error);
          alert('Error creating purchase. Please try again.');
        }
      );
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
