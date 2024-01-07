import { Component, EventEmitter, Output } from '@angular/core';
import { NewCustomer } from '../Models/customer';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'add-customer',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  @Output() addCustomer = new EventEmitter<NewCustomer>();
  newCustomer:NewCustomer = new NewCustomer();

  addClick(): void {
    this.addCustomer.emit(this.newCustomer);
    this.newCustomer = new NewCustomer(); // Clear the form after adding
  }
}
