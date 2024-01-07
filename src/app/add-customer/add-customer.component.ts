import { Component, EventEmitter, Output } from '@angular/core';
import { NewCustomer } from '../Models/customer';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CustomerService } from '../Services/customer.service';


@Component({
  selector: 'add-customer',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  @Output() addedCustomer = new EventEmitter();
  newCustomer:NewCustomer = new NewCustomer();

  constructor(private customerService:CustomerService){}

  addClick(): void {
    this.customerService.createCustomer(this.newCustomer).subscribe(
      (result) => {
        this.newCustomer = new NewCustomer(); // Clear the form after adding
        this.addedCustomer.emit(this.newCustomer);
      }
    );
  }
}
